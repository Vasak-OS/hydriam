# Hydriam

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Vasak-OS_hydriam&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Vasak-OS_hydriam)

Hydriam is a simple and lightweight menu for Linux. It is written in python and uses VueJS. 

## Dependencies

Hydriam depends on the following packages:

* [Bootstrap](https://getbootstrap.com/) ([libvasak-bootstrap](https://github.com/Vasak-OS/PKGBUILDS/blob/main/libvasak-bootstrap/PKGBUILD))
* [libvasak-ui](https://github.com/Vasak-OS/PKGBUILDS/blob/main/libvasak-ui/PKGBUILD)
* [hydriam-data](https://github.com/Vasak-OS/PKGBUILDS/blob/main/hydriam-data/PKGBUILD)
* [python-libvasak](https://github.com/Vasak-OS/PKGBUILDS/blob/main/python-libvasak/PKGBUILD)

### Build Dependencies

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

3. Install dependencies and Build UI

```bash
cd ui/
yarn install
yarn build
cd ..
```

4. Start Hydriam

```bash
python hydriam.py --webEngineArgs --remote-debugging-port=3030 --remote-allow-origins=http://127.0.0.1:3030 # --debug
python hydriam.py # normal mode
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

