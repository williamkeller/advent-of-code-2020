# Advent of Code 2020

Rather than working each puzzle as a separate project, the plan this year is to use a single project, and
share as much code between them as possible. I sort of started to try and do that last year, but it didn't
really work out the way that I wanted. But this is a new year. A new chance.

I want to write a launcher, taking advantage of babel and anything else that gets thrown into the launch
sequence. I'm going to follow a "plugin" pattern, where each day's source file exposes two methods -- puzzle1
and puzzle2. The launcher will figure out the day and puzzle number, load that source file, and call the
exported methods..

As usual for a node app, make sure you do `npm init` first.
