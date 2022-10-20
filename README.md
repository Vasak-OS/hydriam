# Hydriam

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Vasak-OS_hydriam&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Vasak-OS_hydriam)

Hydriam is a simple and lightweight menu for Linux. It is written in JavaScript and uses HTML. 

## Dependencies

Hydriam depends on the following packages:

* [Bootstrap](https://getbootstrap.com/)
* [NW.js](https://nwjs.io/)
* [Vue](https://vuejs.org/) (libvasak-vue)
* libvasak-ui
* hydriam-data
* gnome-menus
* python-dbus
* python-gobject
* gtk3
* pyside2

### Build Dependencies

* [Node.js](https://nodejs.org/)
* [NPM](https://www.npmjs.com/)

## Start Hydriam

To start Hydriam, run the following steps:

1. Clone the repository

```bash
git clone git@github.com:Vasak-OS/hydriam.git
```

2. Move to the directory

```bash
cd hydriam
```

3. Install dependencies

```bash
npm install
```

4. Start Hydriam

```bash
nw ./
```

## Build Hydriam

[PKGBUILD](https://github.com/Vasak-OS/PKGBUILDS/blob/main/hydriam/PKGBUILD)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

1. Fork it
2. Create your feature branch

```bash
git checkout -b feature/battery-indicator
```

3. Commit your changes 

```bash
git commit -am 'Add some battery-indicator'
```

4. Push to the branch

```bash
git push origin feature/battery-indicator
```

5. Create a new Pull Request

## Acknowledgements

- [Bootstrap](https://getbootstrap.com/)
- [Vue](https://vuejs.org/)
- [NW.js](https://nwjs.io/)

