const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('Email transporter error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields (name, email, message)' 
      });
    }

    // Email content for the business owner
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to business email
      replyTo: email, // Allow reply directly to customer
      subject: `New Contact Form Submission${service ? ` - ${service}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            
            <p style="margin: 10px 0;">
              <strong style="color: #6b7280;">Name:</strong> 
              <span style="color: #111827;">${name}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #6b7280;">Email:</strong> 
              <a href="mailto:${email}" style="color: #f59e0b; text-decoration: none;">${email}</a>
            </p>
            
            ${phone ? `
            <p style="margin: 10px 0;">
              <strong style="color: #6b7280;">Phone:</strong> 
              <a href="tel:${phone}" style="color: #111827; text-decoration: none;">${phone}</a>
            </p>
            ` : ''}
            
            ${service ? `
            <p style="margin: 10px 0;">
              <strong style="color: #6b7280;">Service Interested In:</strong> 
              <span style="color: #111827;">${service}</span>
            </p>
            ` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #f59e0b; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="color: #111827; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the Neatify website contact form.</p>
            <p>You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to customer
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Neatify',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            Thank You for Contacting Neatify!
          </h2>
          
          <p style="color: #374151; line-height: 1.6;">
            Dear ${name},
          </p>
          
          <p style="color: #374151; line-height: 1.6;">
            Thank you for reaching out to Neatify! We have received your message and will get back to you within 24 hours.
          </p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #374151; margin: 0;">
              <strong>Your Message:</strong><br/>
              <span style="color: #6b7280; font-style: italic;">${message}</span>
            </p>
          </div>
          
          <p style="color: #374151; line-height: 1.6;">
            In the meantime, feel free to call us at <a href="tel:+251937383931" style="color: #f59e0b; text-decoration: none;">+251 937 383 931</a> if you have any urgent questions.
          </p>
          
          <p style="color: #374151; line-height: 1.6;">
            Best regards,<br/>
            <strong style="color: #f59e0b;">The Neatify Team</strong>
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Neatify - Professional Cleaning Services</p>
            <p>Addis Ababa, Ethiopia</p>
            <p>Email: <a href="mailto:neatifycleaningservice@gmail.com" style="color: #f59e0b;">neatifycleaningservice@gmail.com</a></p>
            <p>Phone: <a href="tel:+251937383931" style="color: #f59e0b;">+251 937 383 931</a></p>
          </div>
        </div>
      `
    };

    // Send confirmation email
    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later or contact us directly.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
