import sys
import signal
from src.HydriamWindow import HydriamWindow
from PyQt6.QtWidgets import QApplication


app = QApplication(sys.argv)

if __name__ == "__main__":
    window = HydriamWindow(app)
    window.show()
    signal.signal(signal.SIGINT, signal.SIG_DFL)  # Habilitar Ctrl+C
    sys.exit(app.exec())
