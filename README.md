# plugin-select-audio-device

## Notice

this plugin is no longer maintained as of Oct 12th 2022.  Work to support this feature in flex v2 has been transitioned over [here](https://github.com/twilio-professional-services/flex-project-template/tree/main/plugin-flex-ts-template-v2/src/feature-library/device-manager)

----

This a twilio Flex plugin that is intended to demonstrate how to use web APIs to select audio devices and apply them for use within Flex.  

There are two notable areas where this is seperately applied.

1.  For use with the voice client (fully demonstrated)
2.  For playback of any custom sounds such as whispers when a task comes in (this is discussed but not demonstrated in full)

# screenshot

![alt text](https://github.com/jhunter-twilio/plugin-select-audio-device/blob/master/screenshot/2019-10-10%2017.15.13.gif?raw=true)

# use
1. Create a clone of this repository
2. create your own public/appConfig.js based on the public/appConfig.example.js and include your own account number
3. run npm install
5. run npm start

# change log

v1.0 - initial release

## Code of Conduct

Please be aware that this project has a [Code of Conduct](https://github.com/twilio-labs/.github/blob/master/CODE_OF_CONDUCT.md). The tldr; is to just be excellent to each other ❤️

# TODOs

1. add redux store so output device ID can be used whenever playing a sound.
