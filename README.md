# mute-darkan
> Controls various dungeon audio in The Veil (Darkan).

The implementation of the custom sounds inside of The Veil (Darkan) currently ignores client audio settings — specifically, background music. Even with your BGM set to 0%, the background music still plays due to the packet being used to control these sounds (`S_PLAY_EVENT_SOUND`). This module provides the ability to mute these sounds.
***
## Usage
The default configuration of this mod only prevents the various BGM soundtracks from playing inside the dungeon, without impeding any of the other sound cues. You can also choose to configure it to block all custom sounds inside the dungeon, not just the BGM sounds.

> [!NOTE]
> This mod does NOT affect any sounds outside of this specific dungeon instance.

***
## Commands
> [!TIP]
> Ignore the `!` prefix if typing the command into the toolbox `/8` chat.

| Command | Argument(s) | Example | Description |
| ------- | -------- | ------- | ----------- |
| !mutedarkan | all | !mutedarkan all | Prevents all custom sounds from playing.
| !mutedarkan | bgm | !mutedarkan bgm | Prevents only the BGM sounds from playing.

> [!NOTE]
> These two commands `[all, bgm]` toggle each other. If `all` is enabled, then `bgm` becomes disabled, and vice versa.

***
## Safety
> [!CAUTION]
> Don't download and use mods that you can't verify are safe. I recommend that everyone look at all mods they intend on using and determine whether or not they're safe to use. When in doubt, **DON'T USE IT!**

> [!IMPORTANT]
> This module does not in any way craft packets or modify packet data. All it does is prevent specific instances of the packet `S_PLAY_EVENT_SOUND` from being received by your client.\
> In other words, it is totally safe to use.

None of the modules released by me will ever be auto-update compatible unless specifically required. The module that you download from this repository will remain as-is forever.
