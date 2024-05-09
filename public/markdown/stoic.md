# The Daily Stoic

[Deployed](https://the-daily-stoic.vercel.app/)  
[Github Repo](https://github.com/samudra-perera/TheDailyStoic)

![The Daily Stoic](../images/projects/stoic.webp)

## Why?

This was a fun little weekend project. I really enjoyed reading this book last year and I was surpirsed to see that no one has done this for this particular book yet.

## How it was built?

I parsed the entire book into daily pages. I initally turned the epub into a zip file, then extracted the content. This turned the epub into xhtml (web markup). I then used [Beautiful Soup](https://beautiful-soup-4.readthedocs.io/en/latest/) to parse every page into markdown. Once this was completed I packaged this up into a small React app and hosted.

## Parsing Issues

I was able to parse 362/366 pages of the book perfectly. The 4 remaining edge cases contained unique class names in their HTML tags. Instead of writing special code for these edge cases, I manually created markdown for those pages. I decided it would be faster to create the pages manually than writing code for 4 unique instances.
