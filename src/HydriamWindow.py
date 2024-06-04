from Vasak.vsk_window import VSKWindow
from Vasak.system.vsk_config_manager import VSKConfigManager
from src.HydriamBinding import HydriamBinding
from PyQt6.QtCore import Qt
from PyQt6.QtWidgets import QApplication

class HydriamWindow(VSKWindow):
    def __init__(self, app):
        super().__init__()
        self.shareObject = HydriamBinding(self, app)
        self.configManager = VSKConfigManager()
        self.channel.registerObject("vsk", self.shareObject)
        self.load_html("ui/dist/index.html") # Cargar un HTML en el WebView
        self.set_position()

    def set_position(self):
        self.setGeometry(0, 0, self.widthApp(), 620)
        self.setScreen(QApplication.primaryScreen())
        self.move(QApplication.primaryScreen().availableGeometry().center() - self.rect().center())
        self.setAttribute(Qt.WidgetAttribute.WA_X11NetWmWindowTypeMenu, True)
        self.setAttribute(Qt.WidgetAttribute.WA_AlwaysShowToolTips, True)
        self.setAttribute(Qt.WidgetAttribute.WA_AlwaysStackOnTop, True)  # Mantener la ventana por encima de las demás
        self.setWindowFlags(
            self.windowFlags() | Qt.WindowType.FramelessWindowHint | Qt.WindowType.WindowStaysOnTopHint
        )  # Establecer atributos de la ventana (sin bordes, sin barra de título, etc.)

    def widthApp(self):
        max = 900 
        if QApplication.primaryScreen().availableGeometry().width() < max:
            max = QApplication.primaryScreen().availableGeometry().width()
        return max
    
    def send_Javascript(self, message):
        self.webview.page().runJavaScript(message)
    
    def load_ui_config(self):
        self.configManager.reload()
        darkMode = self.configManager.get('STYLE', 'darkmode')
        radius = self.configManager.get('STYLE', 'radius')
        color = self.configManager.get('STYLE', 'color')

        self.send_Javascript(f'document.body.style.setProperty("--system-rounded", "{radius}px")')
        self.send_Javascript(f'document.body.style.setProperty("--system-accent-color", "{color}")')
        if darkMode == 'true':
            self.send_Javascript('document.body.classList.add("dark")')
        else:
            self.send_Javascript('document.body.classList.remove("dark")')