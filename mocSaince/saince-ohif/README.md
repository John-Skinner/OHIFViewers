# MOC of Saince PACS to streamline development.
This package includes a back-end for serving up a simple front-end
that offers selection of some if the settings.  Currently, only the
setting for unit of measure is offered.
## Operation Notes
Be sure to use `nx reset` to avoid issues not fully seeing new changes.
The cache can be mis-lead by the links from Ohif to cornerstoneJS.

`yarn run wdev`
To start a watch-mode on the moc server.  Note this watch is only for the 
moc-up ui.  If you change OHIF or CornerstoneJS, the watch will not detect those.
In that case, type `rs` to restart the webpack and server.