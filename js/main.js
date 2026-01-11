import * as listeners from "./listenerRegistration.js"

listeners.registerRenderAccountsAndFoldersOnChangeListener()
listeners.registerSetSelectedFoldersOnStorageChanged()
listeners.registerSaveOptionOnFormChange()
listeners.registerOnContentLoaded()