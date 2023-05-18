export type WebsiteConfig = {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
  /**
   * Shows all post tags in main index view and post view if true
   * Otherwise only shows first (primary) tag
   */
  showAllTags: boolean;
};

const config: WebsiteConfig = {
  title: 'Onetrustme สังคมแห่งการแบ่งปัน การตลาดสายเทา',
  description: 'การตลาดสายเทา By.onetrustme',
  lang: 'en',
  siteUrl: 'https://blog-onetrustme.netlify.app/',
  facebook: 'https://web.facebook.com/loopper.crm.org',
  twitter: 'https://twitter.com/creditsfree50',
  showSubscribe: true,
  mailchimpAction:
    'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
  mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: 'is based on Gatsby Casper',
  showAllTags: true,
};

export default config;
