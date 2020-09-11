import * as functions from "firebase-functions";
import * as qs from "qs";
import axios from "axios";

export const send = functions.https.onCall(
  async (
    data: {
      name: string;
      email: string;
      company: string;
      country: string;
      address: string;
      comment: string;
    },
    context
  ) => {
    const body = `Dear ${data.name}
Your application for EURX validator has been accepted.
If you are elected as a validator, you will have an email from us.
If you don't have an email from us, it means that you are not elected.

Company: ${data.company}
Country: ${data.country}
Address: ${data.address}
Comment: ${data.comment}
`;

    try {
      await axios.post(
        functions.config().gas.send_mail,
        qs.stringify({
          email: data.email,
          subject: "Application for EURX validator has been accepted",
          body: body,
          type: "info",
        })
      );
    } catch {
      throw new functions.https.HttpsError("internal", "");
    }
  }
);
