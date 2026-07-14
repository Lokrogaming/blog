# Lokro Blog

Statischer Blog für GitHub Pages mit einer öffentlichen Beitragsübersicht und einem lokalen No-Code-Editor.

## Beiträge bearbeiten

1. Öffne `admin/index.html` (lokal oder auf der veröffentlichten Website).
2. Erstelle oder bearbeite Beiträge. Der Editor speichert Entwürfe zunächst im Browser.
3. Klicke auf **„blogs.json exportieren“**.
4. Ersetze die Datei `data/blogs.json` im Repository durch die heruntergeladene Datei und veröffentliche die Änderung auf GitHub Pages.

Das lokale Speichern ist Absicht: Eine reine GitHub-Pages-Website darf aus Sicherheitsgründen keine Dateien auf dem Server überschreiben.

## Inhalt formatieren

Der Editor verwendet Markdown. Beispiele:

```md
## Überschrift
**fetter Text** und *kursiver Text*
- Listenpunkt
[Linktext](https://example.com)
![Bildbeschreibung](https://example.com/bild.jpg)
```

## Beitragslinks und Social Cards

Jeder Beitrag hat eine eindeutige alphanumerische **Beitrags-ID** und einen lesbaren **Slug**. Beide URLs funktionieren:

```text
blog.html?post=LokroNews01
blog.html?slug=mein-beitrag
```

Im Editor lassen sich Headerbild sowie Social-Bild, Social-Titel und Social-Beschreibung setzen. Diese Werte erzeugen Open-Graph- und Twitter-Meta-Tags für Link-Vorschauen.
