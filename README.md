# Neksti TV

NextJS + teksti tv

![Vercel](https://vercelbadge.vercel.app/api/attlii/neksti-tv)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Setup

Fill .env-file with following:

```
# https://tunnus.yle.fi/api-avaimet
APP_ID=<YOUR_APP_ID>
APP_KEY=<YOUR_APP_KEY>
```

### Start dev environment

```ssh
$ pnpm install
$ pnpm dev
```

### Build prod

```ssh
$ pnpm install
$ pnpm build
$ pnpm start
```

## TODO

- Change font to support umlauts (I wonder what YLE uses [here](https://yle.fi/aihe/tekstitv?P=100).)
- Charcodes to graphic charcodes (currently are skipped over).
- Animations
- Support different types of content ("all", "text")
- ">>>" links should take you to last subpage
- fix colors to be more accessible
