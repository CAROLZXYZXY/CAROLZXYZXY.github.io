import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components';


import GoogleScholarLogo from '../images/footer/googleScholar-icon.png';
import GithubLogo from '../images/footer/github-icon.png';
import FacebookLogo from '../images/footer/facebook-icon.png';
import TwitterLogo from '../images/footer/twitter-icon.png';

const SocialMediaIcon = styled.img`
  display: inline-block;
  filter: grayscale(1);
  opacity: 0.7;
  border-radius: 50%;
  max-width: 30px;
  margin-right: 10px;
  transition: 0.1s all ease-in;
  &:hover {
    opacity: 1;
    transform: scale(1.05);
    filter: grayscale(0);
  }
`;

const SocialMediaIconsContainer = styled.div`
  margin: 10px 0;
  align-items: center;
`;

const SourceCodeInfoContainer = styled.div`
  margin: 0px 0;
  display: flex;
  align-items: center;
`;

const CommitBadgeCard = styled.div`
  border: 1px solid #eaecef;
  padding: 0px;
  /* padding: 8px 10px;
  display: flex;
  align-items: center; */
`;

const CommitBadgeLeftContainer = styled.div`
  /* margin-right: 8px; */
  display: flex;
  align-items: stretch;
`;

const SourceCodeIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 6px;
`;


const CopyrightSection = ({
  googleScholarProfile,
  facebook,
  github,
  instagram,
  twitter,
}) => (
  <React.Fragment>
    <div>
      <div>
        <span className="footerCopyrights">
          © 2021 Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
        <span className="footerCopyrights">
          Starter created by <a href="https://radoslawkoziel.pl">panr</a>
        </span>
        <span className="footerCopyrights">
          Made with ❤️ by Carol
        </span>
      </div>
      <div>
        <SocialMediaIconsContainer>
          <a href="https://scholar.google.com/citations?user=fhFbxKwAAAAJ&hl=en&authuser=3" id="google-scholar-logo">
            <SocialMediaIcon alt="googleScholar" src={GoogleScholarLogo} />
          </a>
          <a href="https://github.com/CAROLZXYZXY" id="github-logo">
            <SocialMediaIcon alt="github" src={GithubLogo} />
          </a>
          <a href="https://www.facebook.com/xinyi.zheng.376/" id="facebook-logo">
            <SocialMediaIcon alt="facebook" src={FacebookLogo} />
          </a>
          <a href="https://twitter.com/CarolZhengXinyi" id="twitter-logo">
            <SocialMediaIcon alt="twitter" src={TwitterLogo} />
          </a>
        </SocialMediaIconsContainer>
      </div>
    </div>
  </React.Fragment>
);


const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      // <>
      //   <span className="footerCopyrights">
      //     © 2021 Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      //   </span>
      //   <span className="footerCopyrights">
      //     Starter created by <a href="https://radoslawkoziel.pl">panr</a>
      //   </span>
      //   <span className="footerCopyrights">
      //     Made with ❤️ by Carol
      //   </span>
      // </>
      <React.Fragment>
      <div>
        <div>
          <span className="footerCopyrights">
            © 2021 Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </span>
          <span className="footerCopyrights">
            Starter created by <a href="https://radoslawkoziel.pl">panr</a>
          </span>
          <span className="footerCopyrights">
            Made with ❤️ by Carol
          </span>
        </div>
        <div>
          <SocialMediaIconsContainer>
            <a href="https://scholar.google.com/citations?user=fhFbxKwAAAAJ&hl=en&authuser=3" id="google-scholar-logo">
              <SocialMediaIcon alt="googleScholar" src={GoogleScholarLogo} />
            </a>
            <a href="https://github.com/CAROLZXYZXY" id="github-logo">
              <SocialMediaIcon alt="github" src={GithubLogo} />
            </a>
            <a href="https://www.facebook.com/xinyi.zheng.376/" id="facebook-logo">
              <SocialMediaIcon alt="facebook" src={FacebookLogo} />
            </a>
            <a href="https://twitter.com/CarolZhengXinyi" id="twitter-logo">
              <SocialMediaIcon alt="twitter" src={TwitterLogo} />
            </a>
          </SocialMediaIconsContainer>
        </div>
      </div>
    </React.Fragment>
    )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
