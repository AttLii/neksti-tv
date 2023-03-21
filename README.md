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

- Change font (mode7gx3) to support umlauts, maybe just use default monospace font.
- Charcodes to graphic charcodes (currently are skipped over).
- Index-page.
- Animations
- Support different types of content ("all", "text")
