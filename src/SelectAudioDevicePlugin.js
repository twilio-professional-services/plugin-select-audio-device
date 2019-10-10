import React from "react";

import {
  FlexPlugin
} from "flex-plugin";

import AudioDeviceSelector from "./components/AudioDeviceMenu/AudioDeviceSelector";

const PLUGIN_NAME = "SelectAudioDevicePlugin";

export default class SelectAudioDevicePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {

    const options = {
      sortOrder: 0,
      align: "end"
    };
    flex.MainHeader.Content.add( <
      AudioDeviceSelector key = "audio-device-selector" / > ,
      options
    );
  }
}