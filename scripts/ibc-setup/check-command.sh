#!/bin/sh
hermes query packet commitments --chain ununifi-test-private-m1 --port transfer --channel channel-0;
ununifid q ibc channel channels;
osmosisd q ibc channel channels;
