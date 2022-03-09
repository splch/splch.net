---
title: "Testing DuckDuckGo's Email"
date: 2021-09-01T00:00:00-08:00
draft: false
---

![Duck Email](images/duckEmail.webp)

DuckDuckGo began releasing `@duck.com` emails. These emails are currently in beta and only act as an email-forwarding account. The purpose of this post is to stess-test the service and see where it earns the `beta` tag.

## Duck.com vs. Duck.co

Both [duck.com](https://duck.com) and [duck.co](https://duck.co) forward to [duckduckgo.com](https://duckduckgo.com), so I wondered if a duck.com and duck.co email forward emails identically as well. When I tried emailing `spence@duck.co`, however, I received the following 550 error:

```shell
Final-Recipient: rfc822; spence@duck.co
Original-Recipient: rfc822;spence@duck.co
Action: failed
Status: 5.4.1
Remote-MTA: dns; duck-co.mail.protection.outlook.com
Diagnostic-Code: smtp; 550 5.4.1 Recipient address rejected: Access denied.
```

## Send Email as Duck.com to Duck.com

There's a bit of set-up to test this, so I'll outline it in a collapsible tag.

<details>
<summary>Spoofing Duck.com Email</summary>

```shell
# install a mail server
sudo apt install postfix

# install an emailing wrapper
sudo apt install sendemail

# start the email server
systemctl start postfix

# send the email
sendemail -f spence@duck.com -t spence@duck.com -u "Example Subject" -m "Example Message"
```

</details>

Interestingly, when sending an email from spence@duck.com to spence@duck.com, the email went through DuckDuckGo's servers without getting flagged as spam. It might be good for DuckDuckGo to use an allow-list for filtering trusted <abbr title="Internet Protocol">IP</abbr>s.

In addition, this might make it possible to send emails from a duck email without a valid <abbr title="Secure Sockets Layer">SSL</abbr> certificate.

## Creating a Forwarding Loop

Because it's possible to send an email to a duck.com address from a duck.com address, it seems to be possible to create an infinite loop within the system. Obviously, a DuckDuckGo employee would need to approve one duck email forwarding to another, so it probably wouldn't happen. Nevertheless, their back-end might not prevent it.

## Send Duck.com Email Without Forwarding

Running the command from earlier:

```shell
sendemail -f spence@duck.com -t email@example.com -u "Example Subject" -m "Example Message"
```

Nope, this fails... Thank God.

## Conclusion

I think that "looking" at a sender is fine for DuckDuckGo to do, since they forward the email anyways. In their [privacy policy](https://duckduckgo.com/email/privacy-guarantees), they only refrain from saving the email information, not looking at it. Because of this, they should prevent identical duck emails from forwarding to themselves. In addition, they should ensure no cycles appear in forwarding on their systems.

This was my first foray into really beta testing a system, but it was a lot of fun. Maybe I'll keep doing things like these 🤩
