# 18 November 2026 — the world's news in one image

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/AuraFamerCode/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard)
[![reward](https://make.fun/badge/news-image-20261118/AuraFamerCode/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

One 1024×1024 front page for Wednesday 18 November 2026: the Shenzhen summit
lead (Xi greeting Trump, Xi–Putin talks before Thursday's first US–China–Russia
trilateral), the ADNOC tanker struck in the Strait of Hormuz, the Board of
Peace's warning that the Gaza truce may collapse, COP31's second Global
Stocktake, Nvidia's 17th straight beat with the board refusing Jensen Huang and
Anthropic's oversubscribed IPO, Cyclone Akvan turning severe off Andhra
Pradesh, and Alaska's Senate result with Colombia's contraction.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` to the output directory, checking the format from
the file's first bytes and its size against the gate's 1 MiB limit. It uses the
Node standard library only and needs no network.

## Drawing it

`tools/front-page.html` is the page the image is a screenshot of: a masthead
naming the day, a lead with an illustration of the three flags over the summit
table, two side stories, four cards, a strip of the day's numbers and a ticker.
Rendered with headless Chrome at 1024×1024:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1024,1024 --screenshot=entry.png "file://$PWD/tools/front-page.html"
```
