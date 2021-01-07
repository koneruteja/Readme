const fs = require('fs');

const generateBadge = license => {
    'GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0', 'MIT License',
             'Boost Software License 1.0', 'The Unlicense'
    if(license === 'GNU AGPLv3'){
        return `
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0);
        `;
    }
    if(license === 'GNU GPLv3'){
        return `
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
        `;
    }
    if(license === 'GNU LGPLv3'){
        return `
[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
        `;
    }
    if(license === 'Mozilla Public License 2.0'){
        return `
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
        `;
    }
    if(license === 'Apache License 2.0'){
        return `
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        `;
    }
    if(license === 'MIT License'){
        return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
        `;
    }
    if(license === 'Boost Software License 1.0'){
        return `
[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
        `;
    }
    if(license === 'The Unlicense'){
        return `
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
        `;
    }
}

module.exports = data => {
    return `
# ${data.title}
${generateBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contribution}
## Tests
${data.test}
## License
Licensed under ${data.license}.
## Questions
https://github.com/${data.github}<br/>
Contact me with additional questions through email: ${data.email}
    `;
};
