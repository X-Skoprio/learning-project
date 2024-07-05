import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async (email, emailType, userId) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 10 * 60 * 1000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordExpiry: Date.now() + 10 * 60 * 1000,
      });
    }


    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAILTRAP_USER,
          pass: process.env.MAILTRAP_PASS
        }
      });

    const mailOption = {
        from : '',
        to : email,
        subject : emailType === 'VERIFY' ? 'Verify Email' : 'Reset Password',
        html : `<p>Click <a href="${process.env.DOMAIN}/verifyEmail?token=${hashedToken}" >here</a> to ${emailType === 'VERIFY' ? 'verify' : 'reset'} your password</p>`
    }

    const mailResponse = await transport.sendMail(mailOption);
    return mailResponse;

  } catch (error) {
    throw new Error(error.message);
  }
};
