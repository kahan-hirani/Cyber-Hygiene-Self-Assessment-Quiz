const questions = [
  {
    _id: '1',
    text: 'Have you ever clicked a link in an email claiming to be from your bank without verifying the sender\'s email address?',
    info: 'Phishing emails often mimic legitimate sources. Always verify the sender’s email and avoid clicking unverified links.',
    correctAnswer: 'No'
  },
  {
    _id: '2',
    text: 'Do you share your password with a colleague who says they need it for a work emergency?',
    info: 'Never share passwords, even with trusted individuals. Use secure methods like password managers or IT support.',
    correctAnswer: 'No'
  },
  {
    _id: '3',
    text: 'Have you ever entered your login details on a website popped up by an unsolicited message?',
    info: 'Pop-up sites are often phishing attempts. Always type URLs manually or use bookmarks for trusted sites.',
    correctAnswer: 'No'
  },
  {
    _id: '4',
    text: 'Do you accept friend requests on social media from people you don’t know?',
    info: 'Unknown friend requests can be part of impersonation scams. Only connect with verified contacts.',
    correctAnswer: 'No'
  },
  {
    _id: '5',
    text: 'Have you ever plugged in a USB drive found in a public place into your work computer?',
    info: 'USBs from public areas may contain malware (baiting). Avoid using unknown devices.',
    correctAnswer: 'No'
  },
  {
    _id: '6',
    text: 'Do you provide personal information over the phone to someone claiming to be from tech support?',
    info: 'Pretexting calls often impersonate authorities. Verify identities through official channels.',
    correctAnswer: 'No'
  },
  {
    _id: '7',
    text: 'Have you ever ignored a warning about an expired security certificate on a website?',
    info: 'Ignoring certificate warnings can expose you to fake sites. Always heed browser alerts.',
    correctAnswer: 'No'
  },
  {
    _id: '8',
    text: 'Do you leave your workstation unlocked when stepping away, even briefly?',
    info: 'Unlocked devices allow tailgating attackers to access your data. Always lock your screen.',
    correctAnswer: 'No'
  },
  {
    _id: '9',
    text: 'Have you ever responded to an email asking for your account details to “verify” your identity?',
    info: 'Legitimate organizations never ask for sensitive data via email. This is a common phishing tactic.',
    correctAnswer: 'No'
  },
  {
    _id: '10',
    text: 'Do you hold the door open for someone at work without checking their ID?',
    info: 'Tailgating can allow unauthorized access. Verify identities before granting entry.',
    correctAnswer: 'No'
  },
  {
    _id: '11',
    text: 'Have you ever downloaded an app recommended by an unsolicited text message?',
    info: 'Unsolicited app downloads can install malware. Only use official app stores.',
    correctAnswer: 'No'
  },
  {
    _id: '12',
    text: 'Do you use the same password across multiple personal and work accounts?',
    info: 'Reusing passwords increases risk if one account is compromised. Use unique passwords.',
    correctAnswer: 'No'
  },
  {
    _id: '13',
    text: 'Have you ever given out your work email password to someone posing as IT staff over the phone?',
    info: 'IT staff won’t ask for passwords over the phone. Verify through official IT systems.',
    correctAnswer: 'No'
  },
  {
    _id: '14',
    text: 'Do you click on shortened URLs (e.g., bit.ly) from unknown sources?',
    info: 'Shortened URLs can hide phishing sites. Avoid clicking unless from a trusted source.',
    correctAnswer: 'No'
  },
  {
    _id: '15',
    text: 'Have you ever sent sensitive company data to a personal email to work from home?',
    info: 'This exposes data to unsecured environments. Use secure company-approved methods.',
    correctAnswer: 'No'
  },
  {
    _id: '16',
    text: 'Do you accept job offers or promotions via email without verifying the source?',
    info: 'Impersonation scams often use fake job offers. Contact employers directly to confirm.',
    correctAnswer: 'No'
  },
  {
    _id: '17',
    text: 'Have you ever ignored a suspicious login attempt alert from your email provider?',
    info: 'Alerts signal potential account breaches. Investigate and secure your account immediately.',
    correctAnswer: 'No'
  },
  {
    _id: '18',
    text: 'Do you share your office access card with a contractor for convenience?',
    info: 'Sharing access cards enables unauthorized entry. Always keep them secure.',
    correctAnswer: 'No'
  },
  {
    _id: '19',
    text: 'Have you ever participated in a survey sent via an unsolicited email promising rewards?',
    info: 'Baiting surveys often collect personal data. Avoid unless from a verified source.',
    correctAnswer: 'No'
  },
  {
    _id: '20',
    text: 'Do you use public Wi-Fi without a VPN to access work-related accounts?',
    info: 'Public Wi-Fi is vulnerable to interception. Always use a VPN for security.',
    correctAnswer: 'No'
  },
]

export default questions