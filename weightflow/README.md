# WeightFlow PWA (Prototyp 0.1.0)

Eine deutschsprachige, lokal speichernde Gewichtstracker-PWA mit Dark Mode.

## Enthalten
- Gewichtseintrag mit Datum, kg und optionaler Notiz
- Ein Eintrag pro Kalendertag, Überschreiben nach Bestätigung
- Dashboard, Zeitverlaufsdiagramm, 7-/30-Tage-Mittelwerte
- Zielgewicht und Fortschrittsanzeige
- Lineare Interpolation fehlender Tage bei höchstens 14 aufeinanderfolgenden Fehltagen
- Trendprognose aus mindestens fünf tatsächlichen Messungen der letzten 30 Tage
- CSV-Import und CSV-/JSON-Export
- Offline-Caching per Service Worker
- PWA-Manifest und App-Icon

## Starten
Für PWA-Installation und Offline-Betrieb muss die App über HTTPS oder localhost bereitgestellt werden. Zum lokalen Testen beispielsweise:
`python -m http.server 8000`
Dann `http://localhost:8000` öffnen.

Zum Installieren auf Android die HTTPS-Seite in Chrome öffnen und im Browsermenü „App installieren“ bzw. „Zum Startbildschirm hinzufügen“ wählen.

## CSV-Format
Bevorzugt:
`Datum;Gewicht`
`19.11.2026;84,6`

Alternativ ISO-Datum:
`date,weight`
`2026-11-19,84.6`

## Wichtige Hinweise
- Daten liegen im localStorage dieses Browserprofils. Browserdaten löschen kann Daten entfernen. Regelmäßig JSON-Backups exportieren.
- Interpolierte Werte werden im Diagramm anders markiert und zählen nicht als echte Messungen für die Prognose.
- Interpolation erfolgt nur zwischen vorhandenen Messungen und nur, wenn höchstens 14 Tage fehlen.
- Der Prototyp nutzt keine Gesundheits- oder Cloud-Dienste.
- Google Fonts werden nur bei bestehender Internetverbindung nachgeladen; die App-Funktionen selbst benötigen sie nicht.
- Fotos/Kamera-Anhänge, erweiterte CSV-Spaltenzuordnung und robuste IndexedDB-Speicherung sind für die nächste Ausbaustufe vorgesehen.
