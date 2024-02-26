const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define route for contact form submission
router.post("/contact", async (req, res) => {
  try {
    // Validate request body
    const { firstName, lastName, email, phone, message } = req.body;
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create email message
    const mail = {
      from: `${firstName} ${lastName} <${email}>`,
      to: process.env.RECIPIENT_EMAIL, // Update with recipient email
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${firstName} ${lastName}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone || 'Not provided'}</p>
             <p>Message: ${message}</p>`,
    };

    // Configure Nodemailer transporter
    const contactEmail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send email
    await contactEmail.sendMail(mail);

    // Respond with success message
    res.status(200).json({ message: "Message Sent" });
  } catch (error) {  
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }           
});

// Add router middleware
app.use("/", router);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});   
