import React, { useMemo } from 'react';
import {
  PageSection, SocialMediaContainer, SocialMediaLink, Title,
} from './Main.styled';
import Logo from '../../svg/logo.svg';

export const Main: React.FC = () => {
  const socialMediaLinks = useMemo(() => [
    {
      key: 'instagram',
      title: 'Instagram',
      href: 'https://instagram.com/',
    },
    {
      key: 'discord',
      title: 'Discord',
      href: 'https://discord.gg/',
    },
    {
      key: 'telegram',
      title: 'Telegram',
      href: 'https://t.me/',
    },
  ], []);

  return (
    <PageSection>
      <img src={Logo} alt="Logo" />
      <Title>
        The website is currently under construction.
        <br />
        To keep in touch with the latest updates and news, follow the links below:
      </Title>
      <SocialMediaContainer>
        {
          socialMediaLinks.map((link) => (
            <SocialMediaLink key={link.key} href={link.href} rel="noopener noreferrer">{link.title}</SocialMediaLink>
          ))
        }
      </SocialMediaContainer>
    </PageSection>
  );
};
