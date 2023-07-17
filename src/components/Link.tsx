import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface Props {
  page: string,
  selectedPage: string,
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>
}

function Link(props: Props) {
  const { page, selectedPage, setSelectedPage } = props;
  const lowerCasePage = page?.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
        } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link