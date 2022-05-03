import chalk from 'chalk';

const colorCodes = [
  ['red', '#ff0000'],
  ['blue', '#0000ff'],
  ['black', '#000000'],
  ['white', '#ffffff'],
  ['grey', '#808080'],
  ['green', '#00ff00'],
  ['magenta', '#ff00ff'],
  ['yellow', '#ffff00.'],
  ['cyan', '#00ffff'],
];
const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // string of random hex color

function GetHexValue(color) {
  let hexValue;
  colorCodes.forEach((element) => {
    if (element[0] === color) {
      hexValue = element[1];
    }
  });

  return hexValue;
}

function ThreeLines(color) {
  for (let i = 0; i < 3; i++) {
    console.log(chalk.hex(color)('#'.repeat(31)));
  }
}

function PrintColor(color) {
  ThreeLines(color);
  console.log(chalk.hex(color)('###' + ' '.repeat(31 - 6) + '###'));
  console.log(
    chalk.hex(color)(
      '###' +
        ' '.repeat((31 - 6 - 7) / 2) +
        color +
        ' '.repeat((31 - 6 - 7) / 2) +
        '###',
    ),
  );
  console.log(chalk.hex(color)('###' + ' '.repeat(31 - 6) + '###'));
  ThreeLines(color);
}

function ThreeLinesArgument() {
  for (let i = 0; i < 3; i++) {
    console.log(chalk[process.argv[2] + process.argv[3]]('#'.repeat(31)));
  }
}

function PrintArgumentColor() {
  ThreeLinesArgument();
  console.log(
    chalk[process.argv[2] + process.argv[3]](
      '###' + ' '.repeat(31 - 6) + '###',
    ),
  );
  console.log(
    chalk[process.argv[2] + process.argv[3]](
      '###' +
        ' '.repeat((31 - 6 - 7) / 2) +
        GetHexValue(process.argv[2]) +
        ' '.repeat((31 - 6 - 7) / 2) +
        '###',
    ),
  );
  console.log(
    chalk[process.argv[2] + process.argv[3]](
      '###' + ' '.repeat(31 - 6) + '###',
    ),
  );
  ThreeLinesArgument();
}

if (process.argv.length < 3) {
  PrintColor(randomColor);
} else {
  if (process.argv.length < 4) {
    PrintColor(GetHexValue(process.argv[2]));
  } else if (process.argv.length === 4) {
    try {
      PrintArgumentColor();
    } catch {
      console.error('please pass valid arguments...');
    }
  } else {
    console.error('please pass valid arguments...');
  }
}
