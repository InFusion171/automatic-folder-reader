import * as listeners from "./listenerRegistration.js"

listeners.registerOnContentLoaded()
listeners.registerRenderAccountsAndFoldersOnChangeListener()
listeners.registerSetSelectedFoldersOnStorageChanged()
listeners.registerSaveOptionOnFormChange()