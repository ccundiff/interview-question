const Database = require("@replit/database")
const db = new Database();

 db.set("foo", "bar");

const str = "        {\n" +
    "            \"_id\": \"5a5d34257ebd640bbdba1883\",\n" +
    "            \"averageMillisecondsToComplete\": 342394761,\n" +
    "            \"featureFlags\": {},\n" +
    "            \"imageUrlKey\": \"static/icon.png\",\n" +
    "            \"iosPrice\": 1000,\n" +
    "            \"name\": \"Testy Test\",\n" +
    "            \"price\": 1000,\n" +
    "            \"profession\": \"Entertainer\",\n" +
    "            \"talentSettings\": {\n" +
    "                \"availableForBookingAndroid\": true,\n" +
    "                \"availableForBookingIOS\": true,\n" +
    "                \"availableForOnlineNow\": true,\n" +
    "                \"availableForPaidDM\": false,\n" +
    "                \"hasRecordingCountdown\": true,\n" +
    "                \"showReadReceipts\": true\n" +
    "            },\n" +
    "            \"temporarilyUnavailable\": false,\n" +
    "            \"username\": \"this_is_a_test\"\n" +
    "        }";

    const user2 = "        {\n" +
    "            \"_id\": \"5b292693f1eb8e044f0f3128\",\n" +
    "            \"averageMillisecondsToComplete\": 597820684,\n" +
    "            \"charityId\": \"5ed94ea0756791e912ef3e5c\",\n" +
    "            \"dmPrice\": 299,\n" +
    "            \"featureFlags\": {\n" +
    "                \"instantCameoPromotion\": false\n" +
    "            },\n" +
    "            \"imageUrlKey\": \"static/icon.png\",\n" +
    "            \"iosPrice\": 1000,\n" +
    "            \"name\": \"Testy Test\",\n" +
    "            \"price\": 1000,\n" +
    "            \"profession\": \"Entertainer\",\n" +
    "            \"tags\": [\n" +
    "                {\n" +
    "                    \"_id\": \"5ed6bd83a021670037507938\",\n" +
    "                    \"hiddenFromProfile\": false,\n" +
    "                    \"hiddenFromSearch\": false,\n" +
    "                    \"name\": \"Black Female Leaders\",\n" +
    "                    \"slug\": \"black-female-leaders\"\n" +
    "                }\n" +
    "            ],\n" +
    "            \"talentSettings\": {\n" +
    "                \"autoSaveCameoVideo\": true,\n" +
    "                \"availableForBookingAndroid\": true,\n" +
    "                \"availableForBookingIOS\": true,\n" +
    "                \"availableForOnlineNow\": true,\n" +
    "                \"availableForPaidDM\": false,\n" +
    "                \"availableForRichMediaAssetRequests\": true,\n" +
    "                \"availableForRichMediaLinkRequests\": true,\n" +
    "                \"bookableForLiveExperience\": false,\n" +
    "                \"hasRecordingCountdown\": true,\n" +
    "                \"showReadReceipts\": true,\n" +
    "                \"universalDM\": false\n" +
    "            },\n" +
    "            \"temporarilyUnavailable\": false,\n" +
    "            \"userPromotions\": [],\n" +
    "            \"username\": \"testymctestersonbro\"\n" +
    "        }";

    db.set("5b292693f1eb8e044f0f3128", user2);



    db.set("5a5d34257ebd640bbdba1883", str);

   

