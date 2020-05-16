<p align="center">
  <h3 align="center">
    @ntegral/sendgrid-client
  </h3>

  <p align="center">
    A wrapper for the Twilio SendGrid Client using the SendGrid v3 Web API.
  </p>
</p>

## Table Of Contents

- [About](#about)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)


## About

A wrapper for the Twilio SendGrid Client using the SendGrid v3 Web API.

## Prerequisites

- Node.js version 8+
- A Twilio SendGrid Account account, sign up for a free production or development account (https://www.sendgrid.com/)


## Installation

```bash
npm install --save @ntegral/sendgrid-client @sendgrid/client
```

## Getting Started

The simplest way to use `@ntegral/sendgrid-client` is as follows:

```typescript
import { SendGridClient } from "@ntegral/sendgrid-client";

const opts: SendGridClientOptions = {
    apiKey: "--- sendgrid api key ---"
};

let sgc = new SendGridClient(opts);

const mailDynamic: resource.Mail.MailData = {
    personalizations: [
        {
            to: [
                {
                    email: "someone@email.com",
                    name: "Some One"
                }
            ],
            subject: "Sample Subject",
            dynamic_template_data: {
                first_name: "Some",
                last_name: "One"
            }
        }
    ],
    from: {
        email: "hi@fromemail.com",
        name: "Hi Sender"
    },
    template_id: 'SendGrid Dynamic Template Id'
};

sgc.send(mailDynamic).then((result) => {
    console.log('result from send', result);
}).catch((err) => {
    console.log('error from send', err.response.body);
});
```

## Contributing

I would greatly appreciate any contributions to make this project better. Please
make sure to follow the below guidelines before getting your hands dirty.

1. Fork the repository
2. Create your branch (`git checkout -b my-branch`)
3. Commit any changes to your branch
4. Push your changes to your remote branch
5. Open a pull request

## License

Distributed under the ISC License. See `LICENSE` for more information.

## Acknowledgements

- [SendGrid](https://www.sendgrid.com)

Copyright &copy; 2020 Ntegral Inc.