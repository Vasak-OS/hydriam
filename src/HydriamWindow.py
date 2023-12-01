from Vasak.VSKWindow import VSKWindow
from src.HydriamBinding import HydriamBinding

class HydriamWindow(VSKWindow):
    def __init__(self, app):
        super().__init__()
        self.shareObject = HydriamBinding(self, app)
        self.channel.registerObject("vsk", self.shareObject)
        self.load_html("ui/dist/index.html") # Cargar un HTML en el WebView
