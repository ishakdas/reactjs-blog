export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  email = 'email',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@ishakdas',
  site: 'ishakdas.dev',
  calendly: 'https://calendly.com/ishakdas',
  links: {
    github: 'https://github.com/ishakdas',
    linkedin: 'https://linkedin.com/in/ishakdas',
    twitter: 'https://twitter.com/ishakdas',
    email: 'mailto:ishak@ishakdas.dev',
  },
};
