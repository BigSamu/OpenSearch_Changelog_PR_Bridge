<!-- prettier-ignore-start -->
<!-- omit in toc -->
# OpenSearch Changelog PR Bridge
<!-- prettier-ignore-end -->

![Apache 2.0 License](https://img.shields.io/github/license/saltstack/salt)
<!-- ![Coverage Badge](./badges/coverage.svg) -->

This repository contains the details and source code for **OpenSearch Changelog PR Bridge** service, part of the broader **Automated Changelog and Release Notes Process** adopted by the [OpenSearch Project](https://opensearch.org/). It presents comprehensive information on how this service works and interacts with the [OpenSearch Changelog Bot](https://github.com/apps/opensearch-changeset-bot) and [OpenSearch Changelog Workflow]((https://github.com/BigSamu/OpenSearch_Parse_Changelog_Action)), and also

<left>
  <img src="./assets/OpenSearch-bot-logo.png" alt="OpenSearch-bot Logo" width="180" height="180">
</left>

<!-- omit in toc -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
  - [Installing on an OpenSearch Repository](#installing-on-an-opensearch-repository)
  - [Installing on Forked Repositories](#installing-on-forked-repositories)
- [Features](#features)
- [Usage](#usage)
- [Mantainers](#mantainers)
- [Contributing](#contributing)
- [License](#license)

## Installation

In order for the app to work as intended, it must be installed both on an OpenSearch repository as well as on any forked repositories that PRs originate from.

<!-- omit from toc -->

### Installing on an OpenSearch Repository

- Navigate to the [OpenSearch-bot](https://github.com/apps/opensearch-bot) installation page and click "Install".
- Select the OpenSearch repository where this app will manage PRs and process changeset files.
- Follow the instructions to complete the installation.

<!-- omit from toc -->

### Installing on Forked Repositories

- In the forked OpenSearch repository, navigate to the [OpenSearch-bot](https://github.com/apps/opensearch-bot) installation page and click "Install".
- Follow the instructions to complete the installation on the forked repository.

## Features

The app works as follows:

1. **PR Changelog Processing:** When a user opens or edits a pull request (PR) from a forked repository against an OpenSearch repository, the app scans the PR description, looking for changelog entries listed in a "Changelog" section. It then generates a changeset file from these entries and commits this file to the open PR.

2. **Automating Release Documentation:** When the PR is merged, the changeset file is stored in a designated directory in the base repository. At the time of a new release, the app scans this directory and uses the changeset files to generate comprehensive release notes and update the changelog with new entries.

This process ensures a streamlined and automated approach to maintaining up-to-date release documentation in OpenSearch repositories.

For a more detailed walkthrough of the `OpenSearch-bot` app's features, see our [Feature Details](docs/FEATURE_DETAILS.md) document.

## Usage

In order for this app to work as intended, whenever a PR is opened from an OpenSearch fork against the base repository, the PR description must include a `## Changelog` heading.

Beneath this heading is where you will add a changelog entry or entries summarizing your contribution.

In order for the app to parse your entries and generate changeset files, each entry must:

- begin with a hyphen followed by a space ("- ")
- include one of the following category prefixes, followed by a colon:
  - breaking
  - chore
  - deprecate
  - doc
  - feat
  - fix
  - infra
  - refactor
  - security
  - skip
  - test
- conclude with a description of your contribution in the imperative mood using no more than 100 characters

If the changes introduced in your PR are minor (e.g., fixing a typo), you can enter `- skip` in the "Changelog" section to instruct the app not to generate a changeset file. Please note that, if you enter `-skip` in the "Changelog" section, no other categories or descriptions can be present.

Here is an example of a properly-formatted changelog entry in a PR description:

```markdown
## Changelog

- feat: Add new feature
```

The app is equipped with robust error handling so that, if your PR description lacks the required information or needs reformatting in some way, the process will terminate and a comment will be added to your PR explaining what needs to be fixed.

## Mantainers

- [Samuel Valdes Gutierrez](https://github.com/BigSamu)
- [Johnathon Bowers](https://github.com/JohnathonBowers)

## Contributing

The **Automated Changelog Release Notes Process** is the result of a concerted effort by OpenSearch maintainers and contributors to improve the development experience for all involved in OpenSearch suite.

Contributions to the **OpenSearch Changelog PR Bridge** are welcome! See our [Developer Guide](docs/DEVELOPER_GUIDE.md) for instructions on how to set up the project in your local environment and [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

This project is an open-source product released under the Apache 2.0 license (see either [the Apache site](https://www.apache.org/licenses/LICENSE-2.0) or the [LICENSE.txt file](./LICENSE.txt)). The Apache 2.0 license allows you to freely use, modify, distribute, and sell your own products that include Apache 2.0 licensed software.
