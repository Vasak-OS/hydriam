import os
import json
from gi.repository import Gio
from PyQt6.QtCore import pyqtSlot, QObject
from Vasak.system.vsk_menu_manager import VSKMenuManager
from Vasak.system.vsk_power_manager import VSKPowerManager

class HydriamBinding(QObject):
  def __init__(self, window, app):
    super().__init__()
    self.window = window
    self.app = app
    self.menuManager = VSKMenuManager()
    self.powerManager = VSKPowerManager()

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
  def loadUIConfig(self):
    self.window.load_ui_config()
  
  @pyqtSlot()
  def exit(self):
    self.app.quit()

  @pyqtSlot()
  def reboot(self):
    self.powerManager.reboot()
  
  @pyqtSlot()
  def shutdown(self):
    self.powerManager.poweroff()
  
  @pyqtSlot()
  def suspend(self):
    self.powerManager.suspend()
  
  @pyqtSlot()
  def logout(self):
    self.powerManager.logout()

  @pyqtSlot()
  def lock(self):
    self.powerManager.lock()

  @pyqtSlot(str)
  def openApp(self, file: str):
    desktop_file = Gio.DesktopAppInfo.new_from_filename(file)
    desktop_file.launch_uris([], None)