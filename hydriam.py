import sys
import signal
import os
from src.HydriamWindow import HydriamWindow
from PyQt6.QtCore import QFileSystemWatcher
from PyQt6.QtWidgets import QApplication


app = QApplication(sys.argv)
files = [os.path.expanduser('~') + '/.config/vasak/vasak.conf']
watcher = QFileSystemWatcher(files)
watcher.addPaths(files)

if __name__ == "__main__":
    app.setApplicationName("Hydriam")
    app.setApplicationVersion("0.1.1")
    app.setOrganizationName("Vasak Group")
    window = HydriamWindow(app)
    window.show()
    watcher.fileChanged.connect(window.load_ui_config)
    signal.signal(signal.SIGINT, signal.SIG_DFL)  # Habilitar Ctrl+C
    sys.exit(app.exec())
