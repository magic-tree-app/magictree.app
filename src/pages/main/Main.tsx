import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  PageSection, SocialMediaContainer, SocialMediaLink, Title,
} from './Main.styled';
import Logo from '../../svg/logo.svg';

export const Main: React.FC = () => {
  const socialMediaLinks = useMemo(() => [
    {
      key: 'instagram',
      title: 'Instagram',
      href: '/',
    },
    {
      key: 'discord',
      title: 'Discord',
      href: 'https://discord.com/invite/KYtJEHqcH6',
    },
    {
      key: 'telegram',
      title: 'Telegram',
      href: '/',
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
            <SocialMediaLink
              key={link.key}
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.title}
            </SocialMediaLink>
          ))
        }
      </SocialMediaContainer>
      <Link to="/view">
        Launch demo
      </Link>
    </PageSection>
  );
};
