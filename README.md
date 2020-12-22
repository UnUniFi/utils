# Botany

## Cosmoscan Extension

[cosmoscan](https://github.com/lcnem/cosmoscan)のサブディレクトリ`botany`に置くことで機能するエクスプローラー拡張。

### デプロイコマンドでやっている内容

- `projects/cosmoscan-extension/src/config-[jpyx/eurx].json`を[cosmoscan](https://github.com/lcnem/cosmoscan)の`src/config.json`として配置
- 以下のような Docker イメージをビルド
  - [cosmoscan](https://github.com/lcnem/cosmoscan)をビルド
  - `projects/cosmoscan-extension`をビルド
  - ビルド用イメージを破棄して、ビルド後ファイルを nginx イメージに配置
    - cosmoscan は HTTP 直下
    - cosmoscan-extension は`botany`フォルダ以下
- 上記の Docker イメージを Docker Compose で管理

## Run

```bash
cd ..
git clone https://github.com/lcnem/cosmoscan.git
cd botany
docker-compose up -d
```
