<!-- prettier-ignore-start -->
<!-- omit in toc -->
# OpenSearch Changelog PR Bridge
<!-- prettier-ignore-end -->

![Apache 2.0 License](https://img.shields.io/github/license/saltstack/salt)

<!-- ![Coverage Badge](./badges/coverage.svg) -->

This repository contains the details and source code for **OpenSearch Changelog PR Bridge** service, part of the new broader **Automated Changelog and Release Notes Process** adopted by the [OpenSearch Project](https://opensearch.org/). It presents comprehensive information on how this service works and interacts with the [OpenSearch Changelog Bot](https://github.com/apps/opensearch-changeset-bot) and [OpenSearch Changelog Workflow](https://github.com/BigSamu/OpenSearch_Parse_Changelog_Action), including also guidelines on how to contribute.

For more information about the **Automated Changelog and Release Notes Process** as a whole, please refer to [OpenSearch Changelog Workflow and Release Notes Script](https://github.com/BigSamu/OpenSearch_Parse_Changelog_Action) repository.

<!-- prettier-ignore-start -->
<!-- omit in toc -->
## Table of Contents
<!-- prettier-ignore-end -->

- [Process Overview](#process-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Mantainers](#mantainers)
- [Contributing](#contributing)
- [License](#license)

## Process Overview

As explained in [OpenSearch Changelog Workflow and Release Notes Script](https://github.com/BigSamu/OpenSearch_Parse_Changelog_Action), **OpenSearch Changelog PR Bridge** is a minimal service interacting with **OpenSearch Changelog Workflow**, used to commit changeset files on behalf of a contributor. The idea behind this is that if a contributor wants to use the option for an `Automated Changeset Creation/Update` job, then he can install a GitHub App - **[OpenSearch Changelog Bot](https://github.com/apps/opensearch-changeset-bot)** - to include this feature in his forked repository. This App, once set up, allows the **OpenSearch Changelog PR Bridge** to operate on behalf of the contributor, as specific permissions are granted by him during this installation process.

In this manner, when **OpenSearch Changelog Workflow** service sends a request to the **OpenSearch Changelog PR Bridge** service, the latter is enabled to commit changeset files to the contributor's repository, as it possesses the necessary permissions for this action. Below is a diagram illustrating this overall process.

![OpenSearch_Automated_Changeset_Creation_Update](./assets/OpenSearch_Automated_Chageset_Creation_Update_Diagram.png)

## Installation

In order to use the **OpenSearch Changelog Workflow** service for automatic creation or update of changeset files:

- Navigate to the [OpenSearch-bot](https://github.com/apps/opensearch-changeset-bot) installation page and click "Install".
- Follow the instructions to complete the installation and only install this App in all forked OpenSearch repositories where you want to have this feature activated.

## Usage

In your opened PR, add the changelog entries on your PR description under the "Changelog" section. If the entry is a valid one (in other words, the parsing succeeds) or not a 'skip' entry, then a valid changeset file will be created on your forked repository, with the following commit appearing in the PR conversation pannel:

![Changeset_Commit_Message](./assets/Changeset_Commit_Message.png)

## Mantainers

- [Samuel Valdes Gutierrez](https://github.com/BigSamu)
- [Johnathon Bowers](https://github.com/JohnathonBowers)

## Contributing

The **Automated Changelog Release Notes Process** is the result of a concerted effort by OpenSearch maintainers and contributors to improve the development experience for all involved in OpenSearch suite.

Contributions to the **OpenSearch Changelog PR Bridge** are welcome! See our [Developer Guide](docs/DEVELOPER_GUIDE.md) for instructions on how to set up the project in your local environment and [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

This project is an open-source product released under the Apache 2.0 license (see either [the Apache site](https://www.apache.org/licenses/LICENSE-2.0) or the [LICENSE.txt file](./LICENSE.txt)). The Apache 2.0 license allows you to freely use, modify, distribute, and sell your own products that include Apache 2.0 licensed software.
