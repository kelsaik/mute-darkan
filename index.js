module.exports = class mod {
	constructor(mod) {
		mod.loadSettings()

		mod.hook("S_PLAY_EVENT_SOUND", "*", (event) => {
			if (mod.game.me.zone !== 3111) return
			return mod.settings.allSoundsDisabled || (mod.settings.bgmDisabled && mod.settings.bgmSounds.includes(event.id)) ? false : undefined
		})

		mod.command.add("mutedarkan", {
			all() {
				mod.settings.allSoundsDisabled = !mod.settings.allSoundsDisabled
				mod.settings.bgmDisabled = mod.settings.allSoundsDisabled ? false : mod.settings.bgmDisabled
				mod.command.message(`All dungeon sounds inside The Veil (Darkan) ${mod.settings.allSoundsDisabled ? `dis` : `en`}abled.`)
				mod.saveSettings()
			},
			bgm() {
				mod.settings.bgmDisabled = !mod.settings.bgmDisabled
				mod.settings.allSoundsDisabled = mod.settings.bgmDisabled ? false : mod.settings.allSoundsDisabled
				mod.command.message(`The Veil (Darkan) BGM soundtrack ${mod.settings.bgmDisabled ? `dis` : `en`}abled.`)
				mod.saveSettings()
			},
			$default() {
				mod.command.message(`Invalid input. Valid commands: /8 mutedarkan [all, bgm]`)
			}
		})
	}
}
