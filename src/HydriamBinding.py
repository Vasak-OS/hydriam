import os
import json
from PyQt6.QtCore import pyqtSlot, QObject
from Vasak.system.VSKMenuManager import VSKMenuManager

class HydriamBinding(QObject):
  def __init__(self, window, app):
    super().__init__()
    self.window = window
    self.app = app
    self.menuManager = VSKMenuManager()

  @pyqtSlot(result=str)
  def getHome(self):
      home_path = os.path.expanduser("~")

      if not os.path.isabs(home_path):
        home_path = os.path.join("/", home_path)

      return home_path
  
  @pyqtSlot(result=str)
  def getMenuData(self):
    return json.dumps(self.menuManager.items(), indent=2)
  
  @pyqtSlot()
  def exit(self):
    self.app.quit()