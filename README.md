[![make.fun](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/tunnelmoon/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/tunnelmoon/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

# Office Artifacts: The One-Line Placard Contest

A make.fun bounty entry. `main.ts` (Node 22, stdlib only) writes a single-line
museum placard for an ordinary office object, treated as an ancient artifact,
to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt`.

The placard:

> Votive tablet, adhesive-backed, c. 2019. One of 4,000 inscribed 'call me' and affixed to the temple wall. Donor unknown, though the handwriting is Linda's.

## Run

```sh
node main.ts
```

The program validates the line (1-180 characters, single line, not only white
space) and writes it to `entry.txt` in the output directory.

## License

MIT. See [LICENSE](LICENSE).
