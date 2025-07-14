import React from 'react';

function Footer() {

  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/TWelk"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/tylerwelker297/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/14720298/twelk"
    },
    {
      name: "fa fa-envelope",
      link: "mailto:twelker08@gmail.com"
    }
  ]

  return (
    <footer className="flex-row px-1">
      <div>
        {icons.map(icon =>
        (
          <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
        )
          )}
      </div>
      <p>
        <strong>© Tyler Welker™</strong> React Portfolio. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
