import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import ArrowRightIcon from '../../static/img/ArrowRight.svg';
import ConsensusIcon from '../../static/img/Consensus.svg';
import DelegatorIcon from '../../static/img/Delegator.svg';
import DeveloperIcon from '../../static/img/Developer.svg';
import LearnIcon from '../../static/img/Learn.svg';
import ValidatorIcon from '../../static/img/Validator.svg';
import IntroductionIcon from '../../static/img/Introduction.svg';

import styles from './index.module.css';

const icons = {};

const cardData = [
  {
    title: 'Introduction',
    subtitle: 'What is Lemon Chain and what makes it unique.',
    link: '/docs/intro',
    className: 'blueGradient',
    icon: IntroductionIcon,
  },
  {
    title: 'Consensus',
    subtitle: "The mechanism behind Lemon Chain's scalability and security.",
    link: '/docs/consensus',
    className: 'lightBlueGradient',
    icon: ConsensusIcon,
  },
  {
    title: 'Learn',
    subtitle: "Differences between PoS, DPos, and Lemon Chain's consensus.",
    link: '/docs/category/learn',
    className: 'greenGradient',
    icon: LearnIcon,
  },
  {
    title: 'Validator',
    subtitle:
      'What a validator is and how to become one to earn rewards and secure the network.',
    link: '/docs/category/validator',
    className: 'purpleGradient',
    icon: ValidatorIcon,
  },
  {
    title: 'Delegator',
    subtitle: 'Stake LEMX and earn rewards.',
    link: '/docs/Roles/Delegator/specifications',
    className: 'orangeGradient',
    icon: DelegatorIcon,
  },
  {
    title: 'Developer',
    subtitle: 'All the tools you need to build a decentralized app on Lemon Chain.',
    link: '/docs/category/developers',
    className: 'pinkGradient',
    icon: DeveloperIcon,
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Learn everything about the technology behind Lemon Chain'
    >
      <main className={styles.main}>
        <h1>Welcome to the Lemon Chain documentation</h1>
        <h2>Learn everything about the technology behind Lemon Chain</h2>
        <div className={styles.cardContainer}>
          {cardData.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Link key={index} to={card.link}>
                <div className={clsx(styles[card.className], styles.card)}>
                  <div className={styles.left}>
                    <span className={styles.title}>{card.title}</span>
                    <span className={styles.subtitle}>{card.subtitle}</span>
                    <span className={styles.arrowContainer}>
                      <ArrowRightIcon className={styles.arrow} />
                    </span>
                  </div>
                  <div className={styles.right}>
                    <IconComponent className={styles.icon} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
