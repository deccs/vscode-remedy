function mkui({ ui, code }) {
  return {
    /**
     * Base Colours
     */
    focusBorder: `${ui.accent.hex()}66`,
    foreground: ui.text.primary.hex(),
    'widget.shadow': ui.shadow.hex(),
    'selection.background': `${ui.text.primary.hex()}44`,
    descriptionForeground: ui.text.primary.hex(),

    /**
     * Windows
     */
    // 'window.activeBorder': '#ff0000',
    // 'window.inactiveBorder': '#ff0000',

    /**
     * Icons
     */
    'icon.foreground': ui.icon.foreground.hex(),
    'problemsErrorIcon.foreground': ui.problems.error.hex(),
    'problemsWarningIcon.foreground': ui.problems.warning.hex(),
    'problemsInfoIcon.foreground': ui.problems.info.hex(),
    'notificationsErrorIcon.foreground': ui.problems.error.hex(),
    'notificationsInfoIcon.foreground': ui.problems.info.hex(),
    'notificationsWarningIcon.foreground': ui.problems.warning.hex(),
    'symbolIcon.arrayForeground': code.punctuation,
    'symbolIcon.booleanForeground': code.primitives,
    'symbolIcon.classForeground': code.classes,
    'symbolIcon.constantForeground': code.primitives,
    'symbolIcon.constructorForeground': code.classes,
    'symbolIcon.fieldForeground': code.raw,
    'symbolIcon.functionForeground': code.functions,
    'symbolIcon.interfaceForeground': code.types,
    'symbolIcon.methodForeground': code.functions,
    'symbolIcon.moduleForeground': code.classes,
    'symbolIcon.namespaceForeground': code.classes,
    'symbolIcon.propertyForeground': code.constants,
    'symbolIcon.stringForeground': code.strings,
    'symbolIcon.structForeground': code.types,
    'symbolIcon.variableForeground': code.escapes,
    'symbolIcon.numberForeground': code.primitives,
    'symbolIcon.snippetForeground': code.primitives,
    'symbolIcon.keywordForeground': code.language,
    'symbolIcon.nullForeground': code.primitives,
    'symbolIcon.objectForeground': code.punctuation,
    'symbolIcon.operatorForeground': code.language,
    'symbolIcon.packageForeground': code.classes,
    'symbolIcon.textForeground': code.comments,
    'symbolIcon.typeParameterForeground': code.types,
    'symbolIcon.unitForeground': code.primitives,
    // 'symbolIcon.colorForeground': '#ff0000',
    // 'symbolIcon.enumeratorForeground': '#ff0000',
    // 'symbolIcon.enumeratorMemberForeground': '#ff0000',
    // 'symbolIcon.eventForeground': '#ff0000',
    // 'symbolIcon.fileForeground': '#ff0000',
    // 'symbolIcon.folderForeground': '#ff0000',
    // 'symbolIcon.keyForeground': '#ff0000',
    // 'symbolIcon.referenceForeground': '#ff0000',

    /**
     * Lightbulb
     */
    'editorLightBulb.foreground': ui.problems.warning.hex(),
    'editorLightBulbAutoFix.foreground': ui.problems.info.hex(),

    /**
     * Text colours
     *
     * Colors inside a text document, such as the welcome page.
     */
    'textLink.activeForeground': ui.accent.hex(),
    'textLink.foreground': ui.accent.hex(),
    'textBlockQuote.background': ui.background.panel.hex(),
    'textBlockQuote.border': ui.accent.hex(),
    'textCodeBlock.background': ui.background.code.hex(),
    'textPreformat.foreground': code.raw,

    /**
     * Button Control
     *
     * A set of colors for button widgets such as Open Folder button in the Explorer of a new
     * window
     */
    'button.background': ui.button.primary.hex(),
    'button.foreground': ui.text.complimentary.hex(),
    'button.secondaryForeground': ui.button.secondary.hex(),
    'button.secondaryBackground': ui.text.complimentary.hex(),
    // 'button.secondaryHoverBackground': '#ff0000',
    // 'button.hoverBackground': '#ff0000',

    /**
     * Dropdown Control
     *
     * A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output
     * panel. Note that the Dropdown control is not used on macOS currently.
     */
    'dropdown.background': ui.background.panel.hex(),
    'dropdown.foreground': ui.text.primary.hex(),
    'dropdown.border': ui.border.hex(),
    // 'dropdown.listBackground': '#FF0000',

    /**
     * Input Control
     *
     * Colors for input controls such as in the Search view or the Find/Replace dialog.
     */
    'input.background': ui.background.code.hex(),
    'input.border': ui.border.hex(),
    'input.placeholderForeground': ui.text.secondary.hex(),
    'inputValidation.errorBackground': ui.problems.error.hex(),
    'inputValidation.errorForeground': ui.text.contrast.hex(),
    'inputValidation.errorBorder': ui.problems.error.hex(),
    'inputValidation.warningBackground': ui.problems.warning.hex(),
    'inputValidation.warningForeground': ui.text.contrast.hex(),
    'inputValidation.warningBorder': ui.problems.warning.hex(),
    'inputValidation.infoBackground': ui.problems.info.hex(),
    'inputValidation.infoForeground': ui.text.contrast.hex(),
    'inputValidation.infoBorder': ui.problems.info.hex(),
    'inputOption.activeBorder': `${ui.accent.hex()}66`,
    // TODO(vscode): Implement inputOption.foreground colour contribution
    // 'inputOption.activeForeground': '#ff0000',
    // 'input.foreground': '#ff0000',

    /**
     * Search Editor
     */
    'searchEditor.findMatchBorder': `${ui.highlight.word.matches.hex()}44`,
    // 'searchEditor.findMatchBackground': '#ff0000',
    // 'searchEditor.textInputBorder': '#ff0000,

    /**
     * Scrollbar Control
     */
    'scrollbar.shadow': ui.shadow.hex(),
    'scrollbarSlider.activeBackground': `${ui.accent.hex()}66`,
    'scrollbarSlider.background': `${ui.accent.hex()}22`,
    'scrollbarSlider.hoverBackground': `${ui.accent.hex()}44`,

    /**
     * Badge
     *
     * Badges are small information labels, for example, search results count.
     */
    'badge.background': ui.accent.hex(),
    'badge.foreground': ui.text.complimentary.hex(),

    /**
     * Progress Bar
     */
    'progressBar.background': ui.accent.hex(),

    /**
     * Lists And Trees
     *
     * Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an
     * inactive does not.
     */
    'tree.indentGuidesStroke': `${ui.text.secondary.hex()}99`,
    'list.activeSelectionBackground': `${ui.accent.hex()}AA`,
    'list.activeSelectionForeground': ui.text.primary.hex(),
    'list.focusBackground': `${ui.accent.hex()}44`,
    'list.hoverBackground': `${ui.accent.hex()}11`,
    'listFilterWidget.background': `${ui.accent.hex()}88`,
    'listFilterWidget.noMatchesOutline': ui.problems.error.hex(),
    'list.inactiveSelectionBackground': `${ui.accent.hex()}22`,
    'list.highlightForeground': ui.accent.hex(),
    'list.dropBackground': `${ui.background.drop.hex()}22`,
    'list.errorForeground': ui.problems.error.hex(),
    'list.warningForeground': ui.problems.warning.hex(),
    'list.deemphasizedForeground': ui.scm.ignored.hex(),
    'list.invalidItemForeground': ui.problems.error.hex(),
    'list.inactiveFocusBackground': `${ui.accent.hex()}11`,
    // 'list.focusForeground': '#ff0000',
    // 'list.hoverForeground': '#ff0000',
    // 'list.inactiveSelectionForeground': '#ff0000',
    // 'listFilterWidget.outline': '#ff0000',

    /**
     * Activity Bar
     *
     * The Activity Bar is displayed either on the far left or right of the workbench and allows
     * fast switching between views of the Side Bar.
     */
    'activityBar.activeBorder': ui.accent.hex(),
    'activityBar.dropBorder': ui.accent.hex(),
    'activityBar.background': ui.background.panel.hex(),
    'activityBar.border': ui.border.hex(),
    'activityBar.foreground': ui.icon.foreground.hex(),
    'activityBar.inactiveForeground': ui.icon.inactive.hex(),
    'activityBarBadge.background': ui.accent.hex(),
    'activityBarBadge.foreground': ui.text.complimentary.hex(),
    // TODO(vscode): implement panelTitle.activeBackground colour contribution
    // 'activityBar.activeBackground': ui.background.code.hex(),

    /**
     * Side Bar
     *
     * The Side Bar contains views like the Explorer and Search.
     */
    'sideBar.background': ui.background.panel.hex(),
    'sideBar.border': ui.border.hex(),
    'sideBar.foreground': ui.text.primary.hex(),
    'sideBarSectionHeader.foreground': ui.text.secondary.hex(),
    'sideBarSectionHeader.background': ui.background.panel.hex(),
    'sideBarSectionHeader.border': ui.border.hex(),
    'sideBar.dropBackground': `${ui.background.drop.hex()}22`,
    'sideBarTitle.foreground': ui.text.secondary.hex(),

    /**
     * Minimap
     *
     * The Minimap shows a minified version of the current file.
     */
    'minimap.background': ui.background.panel.hex(),
    'minimap.findMatchHighlight': `${ui.highlight.word.matches.hex()}44`,
    'minimap.selectionHighlight': `${ui.text.primary.hex()}AA`,
    'minimap.errorHighlight': ui.problems.error.hex(),
    'minimap.warningHighlight': ui.problems.warning.hex(),
    'minimapGutter.addedBackground': ui.scm.added.hex(),
    'minimapGutter.modifiedBackground': ui.scm.modified.hex(),
    'minimapGutter.deletedBackground': ui.scm.deleted.hex(),
    // 'minimapSlider.hoverBackground': '#ff0000',
    // 'minimapSlider.background': '#ff0000',

    /**
     * Editor Groups & Tabs
     *
     * Editor Groups are the containers of editors. There can be many editor groups. A Tab is the
     * container of an editor. Multiple Tabs can be opened in one editor group.
     */
    'editorGroup.border': ui.border.hex(),
    'editorGroup.dropBackground': `${ui.background.drop.hex()}22`,
    'editorGroupHeader.noTabsBackground': ui.background.panel.hex(),
    'editorGroupHeader.tabsBackground': ui.background.panel.hex(),
    'tab.activeBackground': ui.background.code.hex(),
    'tab.activeBorderTop': ui.accent.hex(),
    'tab.activeForeground': ui.text.primary.hex(),
    'tab.inactiveForeground': ui.text.secondary.hex(),
    'tab.unfocusedActiveForeground': ui.text.secondary.hex(),
    'tab.unfocusedInactiveForeground': ui.text.secondary.hex(),
    'tab.unfocusedHoverForeground': ui.text.primary.hex(),
    'tab.activeModifiedBorder': ui.accent.hex(),
    'tab.border': ui.background.panel.hex(),
    'tab.lastPinnedBorder': ui.border.hex(),
    'tab.inactiveBackground': ui.background.panel.hex(),
    'tab.inactiveModifiedBorder': `${ui.accent.hex()}66`,
    'tab.hoverForeground': ui.text.primary.hex(),
    'editorPane.background': ui.background.panel.hex(),
    // 'editorGroupHeader.border': ui.border.hex(),
    // 'editorGroupHeader.tabsBorder': '#FF0000',
    // 'editorGroup.emptyBackground': '#FF0000',
    // 'editorGroup.focusedEmptyBorder': '#FF0000',
    // 'tab.unfocusedActiveBackground': '#FF0000',
    // 'tab.activeBorder': '#FF0000',
    // 'tab.unfocusedActiveBorder': '#FF0000',
    // 'tab.unfocusedActiveBorderTop': '#FF0000',
    // 'tab.hoverBackground': '#FF0000',
    // 'tab.unfocusedHoverBackground': '#FF0000',
    // 'tab.hoverBorder': '#FF0000',
    // 'tab.unfocusedHoverBorder': '#FF0000',
    // 'tab.unfocusedActiveModifiedBorder': '#FF0000',
    // 'tab.unfocusedInactiveBackground': '#ff0000',
    // 'tab.unfocusedInactiveModifiedBorder': '#FF0000',

    /**
     * Editor Colours
     */
    'editor.background': ui.background.code.hex(),
    'editor.findMatchBackground': `${ui.highlight.word.matches.hex()}44`,
    'editor.findMatchBorder': `${ui.highlight.word.matches.hex()}AA`,
    'editor.findMatchHighlightBackground': `${ui.highlight.word.matches.hex()}33`,
    'editor.findRangeHighlightBackground': `${ui.scm.added.hex()}22`,
    'editor.foreground': ui.text.primary.hex(),
    'editor.hoverHighlightBackground': `${ui.highlight.hover.hex()}11`,
    'editor.lineHighlightBackground': `${ui.highlight.line.hex()}09`,
    'editor.selectionBackground': `${ui.highlight.selection.hex()}22`,
    'editor.selectionHighlightBackground': `${ui.highlight.selection.hex()}11`,
    'editor.wordHighlightBackground': `${ui.highlight.word.highlight.hex()}11`,
    'editor.wordHighlightStrongBackground': `${ui.highlight.word.source.hex()}33`,
    'editor.wordHighlightStrongBorder': `${ui.highlight.word.source.hex()}AA`,
    'editor.onTypeRenameBackground': `${ui.highlight.word.matches.hex()}33`,
    'editorCursor.foreground': ui.text.primary.hex(),
    'editorIndentGuide.activeBackground': `${ui.text.secondary.hex()}99`,
    'editorIndentGuide.background': `${ui.text.secondary.hex()}33`,
    'editorLineNumber.activeForeground': ui.text.primary.hex(),
    'editorLineNumber.foreground': ui.text.secondary.hex(),
    'editorRuler.foreground': `${ui.text.secondary.hex()}99`,
    'editorWhitespace.foreground': `${ui.text.secondary.hex()}99`,
    'editorLink.activeForeground': ui.accent.hex(),
    'editor.rangeHighlightBackground': `${ui.highlight.range.hex()}11`,
    'editorCursor.background': ui.background.panel.hex(),
    // 'editor.wordHighlightBorder': '#FF0000',
    // 'editor.inactiveSelectionBackground': '#FF0000',
    // 'editor.selectionHighlightBorder': '#FF0000',
    // 'editor.findMatchHighlightBorder': '#FF0000',
    // 'editor.lineHighlightBorder': '#FF0000',
    // 'editor.rangeHighlightBorder': '#FF0000',
    // 'editor.selectionForeground': '#FF0000',
    // 'editor.findRangeHighlightBorder': '#FF0000',
    // CodeLens
    'editorCodeLens.foreground': ui.text.secondary.hex(),
    // Bracket Matches
    'editorBracketMatch.background': `${ui.text.secondary.hex()}33`,
    'editorBracketMatch.border': `${ui.text.secondary.hex()}66`,
    // Overview Ruler
    'editorOverviewRuler.background': ui.background.panel.hex(),
    'editorOverviewRuler.border': ui.background.panel.hex(),
    'editorOverviewRuler.bracketMatchForeground': ui.text.secondary.hex(),
    'editorOverviewRuler.findMatchForeground': `${ui.highlight.word.matches.hex()}AA`,
    'editorOverviewRuler.wordHighlightForeground': `${ui.highlight.word.matches.hex()}99`,
    'editorOverviewRuler.wordHighlightStrongForeground': ui.highlight.word.matches.hex(),
    'editorOverviewRuler.modifiedForeground': ui.scm.modified.hex(),
    'editorOverviewRuler.addedForeground': ui.scm.added.hex(),
    'editorOverviewRuler.deletedForeground': ui.scm.deleted.hex(),
    'editorOverviewRuler.errorForeground': ui.problems.error.hex(),
    'editorOverviewRuler.warningForeground': ui.problems.warning.hex(),
    'editorOverviewRuler.infoForeground': ui.problems.info.hex(),
    'editorOverviewRuler.rangeHighlightForeground': `${ui.accent.hex()}AA`,
    // 'editorOverviewRuler.selectionHighlightForeground': '#FF0000',
    // Errors & Warnings
    'editorError.foreground': ui.problems.error.hex(),
    'editorWarning.foreground': ui.problems.warning.hex(),
    'editorInfo.foreground': ui.problems.info.hex(),
    'editorHint.foreground': ui.problems.hint.hex(),
    // 'editorError.border': '#FF0000',
    // 'editorWarning.border': '#FF0000',
    // 'editorInfo.border': '#FF0000',
    // 'editorHint.border': '#FF0000',
    // Unused Source Code
    'editorUnnecessaryCode.opacity': '#00000055',
    // 'editorUnnecessaryCode.border': '#FF0000',
    // Gutter
    'editorGutter.modifiedBackground': ui.scm.modified.hex(),
    'editorGutter.addedBackground': ui.scm.added.hex(),
    'editorGutter.deletedBackground': ui.scm.deleted.hex(),
    'editorGutter.foldingControlForeground': ui.text.secondary.hex(),
    'editor.foldBackground': `${ui.problems.info.hex()}11`,
    'editorGutter.commentRangeForeground': `${ui.text.secondary.hex()}99`,
    // 'editorGutter.background': '#FF0000',

    /**
     * Diff Editor Colours
     */
    'diffEditor.border': ui.border.hex(),
    'diffEditor.diagonalFill': `${ui.text.secondary.hex()}44`,
    'diffEditor.insertedTextBackground': `${ui.scm.added.hex()}22`,
    'diffEditor.removedTextBackground': `${ui.scm.deleted.hex()}22`,
    // 'diffEditor.insertedTextBorder': '#FF0000',
    // 'diffEditor.removedTextBorder': '#FF0000',

    /**
     * Editor Widget Colours
     */
    'editorHoverWidget.background': ui.background.panel.hex(),
    'editorHoverWidget.border': ui.border.hex(),
    'editorSuggestWidget.background': ui.background.panel.hex(),
    'editorSuggestWidget.foreground': ui.text.primary.hex(),
    'editorSuggestWidget.highlightForeground': ui.text.primary.hex(),
    'editorWidget.background': ui.background.panel.hex(),
    'editorWidget.resizeBorder': ui.accent.hex(),
    'editorWidget.border': ui.border.hex(),
    'editorSuggestWidget.border': ui.border.hex(),
    // The Debug Exception widget is a peek view that shows in the editor when debug stops at an
    // exception.
    'debugExceptionWidget.background': ui.background.panel.hex(),
    'debugExceptionWidget.border': ui.accent.hex(),
    // The editor marker view shows when navigating to errors and warnings in the editor (Go to Next
    // Error or Warning command)
    'editorMarkerNavigation.background': ui.background.panel.hex(),
    'editorMarkerNavigationError.background': `${ui.problems.error.hex()}44`,
    'editorMarkerNavigationWarning.background': `${ui.problems.warning.hex()}44`,
    'editorMarkerNavigationInfo.background': `${ui.problems.info.hex()}44`,
    'editorSuggestWidget.selectedBackground': `${ui.accent.hex()}AA`,

    /**
     * Peek View Colours
     */
    'peekView.border': `${ui.accent.hex()}99`,
    'peekViewEditor.background': ui.background.code.hex(),
    'peekViewResult.fileForeground': ui.text.primary.hex(),
    'peekViewTitleLabel.foreground': ui.text.primary.hex(),
    'peekViewEditorGutter.background': ui.background.panel.hex(),
    'peekViewEditor.matchHighlightBackground': `${ui.highlight.word.matches.hex()}22`,
    'peekViewResult.background': ui.background.panel.hex(),
    'peekViewResult.lineForeground': ui.text.primary.hex(),
    'peekViewResult.matchHighlightBackground': `${ui.highlight.word.matches.hex()}99`,
    'peekViewResult.selectionBackground': `${ui.accent.hex()}99`,
    'peekViewResult.selectionForeground': ui.text.primary.hex(),
    'peekViewTitle.background': ui.background.panel.hex(),
    'peekViewTitleDescription.foreground': ui.text.secondary.hex(),
    // 'peekViewEditor.matchHighlightBorder': '#FF0000',

    /**
     * Merge Conflicts
     */
    'merge.currentHeaderBackground': `${ui.scm.conflicts.current.hex()}22`,
    'merge.incomingHeaderBackground': `${ui.scm.conflicts.incoming.hex()}22`,
    'merge.commonHeaderBackground': `${ui.scm.conflicts.common.hex()}22`,
    // 'editorOverviewRuler.currentContentForeground': '#FF0000',
    // 'editorOverviewRuler.incomingContentForeground': '#FF0000',
    // 'editorOverviewRuler.commonContentForeground': '#FF0000',
    // 'merge.border': '#FF0000',
    // 'merge.commonContentBackground': '#FF0000',
    // 'merge.currentContentBackground': '#FF0000',
    // 'merge.incomingContentBackground': '#FF0000',

    /**
     * Panel Colours
     */
    'panel.background': ui.background.panel.hex(),
    'panel.border': ui.border.hex(),
    'panel.dropBorder': ui.accent.hex(),
    'panelTitle.activeBorder': ui.accent.hex(),
    'panelTitle.activeForeground': ui.text.primary.hex(),
    'panelTitle.inactiveForeground': ui.text.secondary.hex(),
    'panelSectionHeader.background': ui.background.panel.hex(),
    'panelSectionHeader.foreground': ui.text.secondary.hex(),
    'panelSectionHeader.border': ui.border.hex(),
    'panelSection.border': ui.border.hex(),
    'panelSection.dropBackground': `${ui.background.drop.hex()}22`,

    /**
     * Status Bar Colours
     */
    'statusBar.background': ui.background.panel.hex(),
    'statusBar.border': ui.border.hex(),
    'statusBar.debuggingBackground': ui.accent.hex(),
    'statusBar.debuggingForeground': ui.text.complimentary.hex(),
    'statusBar.debuggingBorder': ui.border.hex(),
    'statusBar.foreground': ui.background.panel.isDark()
      ? ui.text.secondary.lighten(0.4).hex()
      : ui.text.secondary.darken(0.2).hex(),
    'statusBar.noFolderBackground': ui.background.panel.hex(),
    'statusBarItem.hoverBackground': [
      ui.background.panel.isDark()
        ? ui.background.panel.mix(ui.background.drop, 0.1).hex()
        : ui.background.panel.mix(ui.background.drop, 0.2).hex(),
      '66',
    ].join(''),
    'statusBarItem.remoteBackground': ui.accent.hex(),
    'statusBarItem.remoteForeground': ui.text.complimentary.hex(),
    // 'statusBar.noFolderForeground': '#FF0000',
    // 'statusBar.noFolderBorder': '#FF0000',
    'statusBarItem.activeBackground': [
      ui.background.panel.isDark()
        ? ui.background.panel.mix(ui.background.drop, 0.2).hex()
        : ui.background.panel.mix(ui.background.drop, 0.4).hex(),
      '66',
    ].join(''),
    // 'statusBarItem.prominentForeground': '#FF0000',
    // 'statusBarItem.prominentBackground': '#FF0000',
    // 'statusBarItem.prominentHoverBackground': '#FF0000',

    /**
     * Title Bar Colours
     */
    'titleBar.border': ui.border.hex(),
    'titleBar.activeBackground': ui.background.panel.hex(),
    'titleBar.inactiveBackground': ui.background.code.hex(),
    'titleBar.activeForeground': ui.text.primary.hex(),
    'titleBar.inactiveForeground': ui.text.secondary.hex(),

    /**
     * Menu Bar Colours
     */
    'menubar.selectionForeground': ui.text.primary.hex(),
    'menubar.selectionBackground': ui.accent.hex(),
    'menu.foreground': ui.text.primary.hex(),
    'menu.background': ui.background.panel.hex(),
    'menu.border': `${ui.accent.hex()}66`,
    'menu.selectionForeground': ui.text.primary.hex(),
    'menu.selectionBackground': ui.accent.hex(),
    'menu.separatorBackground': ui.border.hex(),
    // 'menubar.selectionBorder': '#FF0000',
    // 'menu.selectionBorder': '#FF0000',

    /**
     * Notification Colours
     */
    'notifications.background': ui.background.panel.hex(),
    'notificationCenterHeader.background': ui.accent.hex(),
    'notificationCenterHeader.foreground': ui.text.complimentary.hex(),
    'notificationCenter.border': ui.border.hex(),
    'notifications.border': ui.border.hex(),
    'notificationToast.border': ui.border.hex(),
    'notificationLink.foreground': ui.accent.hex(),
    // 'notifications.foreground': '#FF0000',

    /**
     * Extensions
     */
    'extensionButton.prominentForeground': ui.text.complimentary.hex(),
    'extensionButton.prominentBackground': ui.accent.hex(),
    'extensionButton.prominentHoverBackground': ui.accent.lighten(0.25).hex(),

    /**
     * Quick Picker
     */
    'pickerGroup.border': ui.border.hex(),
    'pickerGroup.foreground': ui.text.primary.hex(),

    /**
     * Integrated Terminal Colours
     */
    'terminal.background': ui.background.panel.hex(),
    'terminal.border': ui.border.hex(),
    'terminal.foreground': ui.text.primary.hex(),
    'terminalCursor.foreground': ui.text.primary.hex(),
    'terminal.selectionBackground': `${ui.text.primary.hex()}22`,
    'terminal.ansiBlack': ui.terminal.normal.black.lighten(0.5).hex(),
    'terminal.ansiBlue': ui.terminal.normal.blue.hex(),
    'terminal.ansiCyan': ui.terminal.normal.cyan.hex(),
    'terminal.ansiGreen': ui.terminal.normal.green.hex(),
    'terminal.ansiMagenta': ui.terminal.normal.magenta.hex(),
    'terminal.ansiRed': ui.terminal.normal.red.hex(),
    'terminal.ansiWhite': ui.terminal.normal.white.lighten(0.2).hex(),
    'terminal.ansiYellow': ui.terminal.normal.yellow.hex(),
    'terminal.ansiBrightBlack': ui.terminal.bright.black.lighten(0.5).hex(),
    'terminal.ansiBrightBlue': ui.terminal.bright.blue.hex(),
    'terminal.ansiBrightCyan': ui.terminal.bright.cyan.hex(),
    'terminal.ansiBrightGreen': ui.terminal.bright.green.hex(),
    'terminal.ansiBrightMagenta': ui.terminal.bright.magenta.hex(),
    'terminal.ansiBrightRed': ui.terminal.bright.red.hex(),
    'terminal.ansiBrightWhite': ui.terminal.bright.white.lighten(0.2).hex(),
    'terminal.ansiBrightYellow': ui.terminal.bright.yellow.hex(),
    // 'terminalCursor.background': '#FF0000',

    /**
     * Debug
     */
    'debugToolBar.background': ui.background.panel.hex(),
    'debugToolBar.border': ui.border.hex(),
    'editor.stackFrameHighlightBackground': `${ui.debug.frame.normal.hex()}33`,
    'editor.focusedStackFrameHighlightBackground': `${ui.debug.frame.focused.hex()}22`,
    'debugIcon.breakpointForeground': ui.debug.breakpoint.active.hex(),
    'debugIcon.breakpointDisabledForeground': `${ui.debug.breakpoint.disabled.hex()}66`,
    'debugIcon.breakpointUnverifiedForeground': ui.debug.breakpoint.unverified.hex(),
    'debugIcon.breakpointStackframeForeground': `${ui.debug.frame.normal.hex()}99`,
    'debugIcon.breakpointCurrentStackframeForeground': ui.debug.frame.focused.hex(),
    'debugIcon.startForeground': ui.debug.icon.start.hex(),
    'debugIcon.continueForeground': ui.debug.icon.continue.hex(),
    'debugIcon.pauseForeground': ui.debug.icon.pause.hex(),
    'debugIcon.stepOverForeground': ui.debug.icon.next.hex(),
    'debugIcon.stepBackForeground': ui.debug.icon.back.hex(),
    'debugIcon.stepIntoForeground': ui.debug.icon.into.hex(),
    'debugIcon.stepOutForeground': ui.debug.icon.out.hex(),
    'debugIcon.stopForeground': ui.debug.icon.stop.hex(),
    'debugIcon.disconnectForeground': ui.debug.icon.stop.hex(),
    'debugIcon.restartForeground': ui.debug.icon.restart.hex(),
    'debugView.exceptionLabelForeground': ui.text.contrast.hex(),
    'debugView.exceptionLabelBackground': ui.problems.error.hex(),
    'debugView.stateLabelForeground': ui.text.contrast.hex(),
    'debugView.stateLabelBackground': ui.problems.info.hex(),
    'debugView.valueChangedHighlight': `${ui.problems.info.hex()}99`,
    'debugTokenExpression.name': code.variables,
    'debugTokenExpression.value': ui.text.dimmed.hex(),
    'debugTokenExpression.string': code.strings,
    'debugTokenExpression.boolean': code.primitives,
    'debugTokenExpression.number': code.primitives,
    'debugTokenExpression.error': ui.problems.error.hex(),
    'debugConsole.errorForeground': ui.problems.error.hex(),
    'debugConsole.warningForeground': ui.problems.warning.hex(),
    'debugConsole.infoForeground': ui.problems.info.hex(),
    'debugConsole.sourceForeground': ui.text.dimmed.hex(),
    'debugConsoleInputIcon.foreground': ui.text.dimmed.hex(),

    /**
     * Welcome Page
     */
    'welcomePage.buttonBackground': ui.background.panel.hex(),
    'welcomePage.buttonHoverBackground': ui.background.panel.isDark()
      ? ui.background.panel.lighten(0.1).hex()
      : ui.background.panel.darken(0.1).hex(),
    'walkThrough.embeddedEditorBackground': ui.background.panel.hex(),
    // 'welcomePage.background': '#FF0000',

    /**
     * Git Colours
     */
    'gitDecoration.ignoredResourceForeground': ui.scm.ignored.hex(),
    'gitDecoration.addedResourceForeground': ui.scm.added.hex(),
    'gitDecoration.modifiedResourceForeground': ui.scm.modified.hex(),
    'gitDecoration.deletedResourceForeground': ui.scm.deleted.hex(),
    'gitDecoration.conflictingResourceForeground': ui.scm.conflicting.hex(),
    'gitDecoration.untrackedResourceForeground': ui.scm.untracked.hex(),
    'gitDecoration.submoduleResourceForeground': ui.scm.untracked.hex(),

    /**
     * Settings Editor Colours
     */
    'settings.headerForeground': ui.text.primary.hex(),
    'settings.modifiedItemIndicator': ui.accent.hex(),
    'settings.dropdownBackground': ui.background.panel.hex(),
    'settings.checkboxBackground': ui.background.panel.hex(),
    'settings.textInputBackground': ui.background.panel.hex(),
    'settings.numberInputBackground': ui.background.panel.hex(),
    'settings.checkboxForeground': code.primitives,
    'settings.dropdownForeground': code.raw,
    'settings.textInputForeground': code.strings,
    'settings.numberInputForeground': code.primitives,
    'settings.dropdownBorder': ui.border.hex(),
    'settings.dropdownListBorder': ui.border.hex(),
    'settings.checkboxBorder': ui.border.hex(),
    'settings.textInputBorder': ui.border.hex(),
    'settings.numberInputBorder': ui.border.hex(),

    /**
     * Breadcrumbs
     */
    'breadcrumb.foreground': ui.text.secondary.hex(),
    'breadcrumb.focusForeground': ui.text.primary.hex(),
    'breadcrumb.activeSelectionForeground': ui.text.primary.hex(),
    'breadcrumbPicker.background': ui.background.panel.hex(),
    // 'breadcrumb.background': '#FF0000',

    /**
     * Snippets
     */
    'editor.snippetTabstopHighlightBackground': `${ui.highlight.word.matches.hex()}00`,
    'editor.snippetFinalTabstopHighlightBackground': `${ui.highlight.word.matches.hex()}33`,
    'editor.snippetFinalTabstopHighlightBorder': `${ui.highlight.word.matches.hex()}99`,
    'editor.snippetTabstopHighlightBorder': `${ui.highlight.word.matches.hex()}99`,

    /**
     * Notebook
     */
    'notebook.cellBorderColor': ui.border.hex(),
    'notebook.cellHoverBackground': `${ui.background.panel.hex()}66`,
    'notebook.cellInsertionIndicator': ui.accent.hex(),
    'notebook.cellStatusBarItemHoverBackground': ui.accent.hex(),
    'notebook.cellToolbarSeparator': ui.border.hex(),
    'notebook.focusedCellBackground': ui.background.panel.hex(),
    'notebook.focusedCellBorder': ui.border.hex(),
    'notebook.outputContainerBackgroundColor': ui.background.panel.hex(),
    'notebookStatusErrorIcon.foreground': ui.icon.error.hex(),
    'notebookStatusRunningIcon.foreground': ui.icon.foreground.hex(),
    'notebookStatusSuccessIcon.foreground': ui.icon.success.hex(),
    // 'notebookScrollbarSlider.activeBackground': '#ff0000',
    // 'notebookScrollbarSlider.background': '#ff0000',
    // "notebookScrollbarSlider.hoverBackground": "#ff0000",
    // 'notebook.symbolHighlightBackground': '#ff0000',
    // 'notebook.focusedEditorBorder': '#ff0000',

    /**
     * Charts
     */
    'charts.red': ui.terminal.normal.red.hex(),
    'charts.blue': ui.terminal.normal.blue.hex(),
    'charts.yellow': ui.terminal.bright.yellow.hex(),
    'charts.orange': ui.terminal.normal.yellow.hex(),
    'charts.green': ui.terminal.normal.green.hex(),
    'charts.purple': ui.terminal.normal.magenta.hex(),
    // 'charts.foreground': ui.text.primary.hex(),
    // 'charts.lines': ui.text.secondary.hex(),

    // EXTENSIONS

    /**
     * Error Lens
     */
    'errorLens.errorForeground': ui.problems.error.hex(),
    'errorLens.errorForegroundLight': ui.problems.error.hex(),
    'errorLens.warningForeground': ui.problems.warning.hex(),
    'errorLens.warningForegroundLight': ui.problems.warning.hex(),
    'errorLens.infoForeground': ui.problems.info.hex(),
    'errorLens.infoForegroundLight': ui.problems.info.hex(),
    'errorLens.hintForeground': ui.problems.hint.hex(),
    'errorLens.hintForegroundLight': ui.problems.hint.hex(),
    'errorLens.errorBackground': '#0000',
    'errorLens.errorBackgroundLight': '#0000',
    'errorLens.warningBackground': '#0000',
    'errorLens.warningBackgroundLight': '#0000',
    'errorLens.infoBackground': '#0000',
    'errorLens.infoBackgroundLight': '#0000',
    'errorLens.hintBackground': '#0000',
    'errorLens.hintBackgroundLight': '#0000',
    // 'errorLens.errorMessageBackground': '#ff0000',
    // 'errorLens.warningMessageBackground': '#ff0000',
    // 'errorLens.infoMessageBackground': '#ff0000',
    // 'errorLens.hintMessageBackground': '#ff0000',

    /**
     * GitLens
     */
    'gitlens.gutterForegroundColor': `${ui.text.primary.hex()}66`,
    'gitlens.gutterBackgroundColor': ui.background.code.hex(),
    'gitlens.gutterUncommittedForegroundColor': ui.scm.untracked.hex(),
    'gitlens.lineHighlightBackgroundColor': `${ui.scm.added.hex()}22`,
    'gitlens.lineHighlightOverviewRulerColor': `${ui.scm.added.hex()}22`,
    // 'gitlens.trailingLineBackgroundColor': '#FF0000',
    // 'gitlens.trailingLineForegroundColor': '#FF0000',

    /**
     * LintLens
     */
    'lintlens.annotationColor': `${ui.problems.hint.hex()}99`,

    /**
     * Bookmarks
     */
    'bookmarks.overviewRuler': ui.problems.info.hex(),
    'bookmarks.lineBackground': `${ui.problems.info.hex()}11`,
    'bookmarks.lineBorder': `${ui.problems.info.hex()}66`,

    /**
     * Test Explorer
     */
    'testExplorer.errorDecorationBackground': `${ui.problems.error.hex()}66`,

    /**
     * SQL Tools
     */
    'sqltools.currentQueryBg': `${ui.highlight.word.matches.hex()}22`,
    'sqltools.currentQueryOutline': '#0000',
  }
}

export {
  mkui,
}
