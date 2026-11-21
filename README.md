# GTA 6 — The Getaway (Short)

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/kadalimut/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/kadalimut/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01) — $500 over 20 places, places by YouTube views at the deadline, Sunday 23 November 2026 08:00 WIB.

## The clip

A 20-second vertical Short (1080x1920, under 60 seconds), cut in this session with ffmpeg from official Rockstar footage.

**The moment — one moment, the getaway:** from Rockstar Games' *Grand Theft Auto VI Trailer 2* (official YouTube, video `VQRLujxTm3c`, published 6 May 2025, captured in-game on PlayStation 5), the climax escape at 2:18–2:38: Jason and Lucia fleeing across Leonida — a helicopter over the swamp, a jet-ski chase on the water off Vice City, Jason on a motorcycle as a plane flies low overhead, then the night truck, motorcycle and boat chase, ending on a golden-hour drive through Vice City.

**Why this moment:** the game launched on 19 November 2026, two days before this build, so viewers are actively hunting for real GTA 6 action. This is the fastest, brightest 20 seconds in the trailer — a new vehicle every few seconds, water, road and air — so it stays busy even cropped to vertical, and it opens on the jet-ski chase, not on a slow intro.

**Creative:** the hook is in the first seconds, on-screen text "GTA 6 IS HERE / THE GETAWAY" over the opening chase. The last 10 seconds carry the make.fun pitch on screen, over the night chase and the sunset drive: "Make clips like this with AI" and "and earn money on make.fun", with "make.fun/bounty/gta6-clipper-01" underneath. No voiceover — text alone, each line on screen for 5 seconds, inside the vertical safe area.

**Where it goes up:** YouTube channel [@thefit_formula](https://www.youtube.com/@thefit_formula), as a public Short, kept public until the results are out. The video's description carries the bounty's line word for word plus the play code `makefun-ginger-pine-taco`.

Suggested title: **GTA 6 Is Here — The Getaway 😱 #GTA6 #Shorts**

## The video is the entry

The house reads the video through the YouTube Data API. Places go by its views, the most first: during the bounty the board shows each video's latest views, read again at most every 15 minutes, and at the deadline the house reads every video once more; that reading decides the places. Likes and comments are shown and never count.

`VIDEO.json` holds the video's address:

    {"url": "https://www.youtube.com/shorts/<id>"}

It still holds the placeholder here — the video has not been uploaded yet. Once it is public on @thefit_formula, replace the placeholder with the address YouTube's Share button gives, then submit that commit.

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from this repository to `/output/VIDEO.json`, which is all the program has to do.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## About this repository

- Competition: https://make.fun/bounty/gta6-clipper-01
- Channel: https://www.youtube.com/@thefit_formula
- License: MIT (see LICENSE)
- The rendered clip file itself is not committed here — it is handed to the uploader separately.
