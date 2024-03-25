// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Replaces the chosen license with its SPDX ID using underscores for compatibility with shields.io
  const nuLicense = {
    'Apache License 2.0': 'Apache_2.0',
    'GNU General Public License v3.0': 'GPL_3.0_Only',
    'MIT License': 'MIT',
    "BSD 2-Clause 'Simplified' License": 'BSD_2_Clause',
    "BSD 3-Clause 'New' License": 'BSD_3_Clause',
    'Boost Software License 1.0': 'BSL_1.0',
    'Eclipse Public License 2.0': 'EPL_2.0',
    'GNU Affero General Public License v3.0': 'AGPL_3.0_ Only',
    'GNU General Public License v2.0': 'GPL_2.0',
    'GNU Lesser General Public License v2.1': 'LGPL_2.1',
    'Mozilla Public License 2.0': 'MPL_2.0',
    'Unlicense': 'Unlicense'
  };

  if (license === 'None/Other') {
    return '';
  } else {
    return `![License](https://img.shields.io/badge/License-${nuLicense[license]}-blue.svg)`;
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None/Other') {
    return '';
  } else {
    return `This project is licensed under The ${license}. Please see below for details.`
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Replaces the chosen license with the corresponding section of opensource's URL.
  const nuLicense = {
    'Apache License 2.0': 'apache-2-0',
    'GNU General Public License v3.0': 'gpl-3-0',
    'MIT License': 'mit',
    "BSD 2-Clause 'Simplified' License": 'bsd-2-clause',
    "BSD 3-Clause 'New' License": 'bsd-3-clause',
    'Boost Software License 1.0': 'bsl-1-0',
    'Eclipse Public License 2.0': 'epl-2-0',
    'GNU Affero General Public License v3.0': 'agpl-v3',
    'GNU General Public License v2.0': 'gpl-2-0',
    'GNU Lesser General Public License v2.1': 'lgpl-2-1',
    'Mozilla Public License 2.0': 'mpl-2-0',
    'Unlicense': 'unlicense'
  };

  if (license === 'None/Other') {
    return '';
  } else {
    return `Click [here](https://opensource.org/licenses/${nuLicense[license]}) to learn more about the scope of this project's license.`;
  };
};

// TODO: Create a function to generate markdown for README
function mdGen(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  const licenseLink = renderLicenseLink(data.license);

  return `# ${data.title}
  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [License](#license)
  - [Contact](#contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Testing
  ${data.testing}

  ## License
  ${licenseSection}

  ---
  ${licenseLink}

  ## Contact
  Email me at ${data.email} for any questions about this project, and
  if you want to see more of my projects, check out [${data.username}](https://github.com/${data.username}) on GitHub.
`;
}

module.exports = mdGen;