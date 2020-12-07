#!/usr/bin/env node

const program = require('commander')
const { fetchCurrentWeather } = require('./commands')

program
    .version('0.0.1')
    .description('Command the Weather!')

program
    .command('in <city>')
    .description('view the current weather in the specified city')
    .action(city => fetchCurrentWeather(city))

program.parse(process.argv)
