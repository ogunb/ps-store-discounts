import http from './http.service';

export async function fetchGames(query, location = 'tr/TR') {
    const searchResults = await http.get('/searchGames', {
        params: {
            query,
            location,
        }
    });
    // const searchResults = await new Promise(resolve => setTimeout(() => resolve([
    //   {
    //     "attributes": {
    //       "badge-info": {
    //         "non-plus-user": {
    //           "discount-percentage": 47,
    //           "is-plus": false,
    //           "type": "save-percentage"
    //         },
    //         "plus-user": {
    //           "discount-percentage": 52,
    //           "is-plus": true,
    //           "type": "save-percentage"
    //         }
    //       },
    //       "cero-z-status": {
    //         "is-allowed-in-cart": false,
    //         "is-on": false
    //       },
    //       "content-rating": {
    //         "content-descriptors": [
    //           {
    //             "description": "Language",
    //             "name": "Language",
    //             "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/descriptors/sd/pegi/language.png"
    //           },
    //           {
    //             "description": "Violence",
    //             "name": "Violence",
    //             "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/descriptors/sd/pegi/violence.png"
    //           }
    //         ],
    //         "contentInteractiveElement": [],
    //         "rating-system": "PEGI",
    //         "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/ratings/hd/pegi/18.png"
    //       },
    //       "content-type": "1",
    //       "default-sku-id": "EP9000-CUSA09175_00-00000DAYSGONEDLX-E001",
    //       "dob-required": false,
    //       "file-size": {
    //         "unit": "GB",
    //         "value": 47.35
    //       },
    //       "game-content-type": "Paket",
    //       "genres": [
    //         "Aksiyon",
    //         "Macera"
    //       ],
    //       "is-igc-upsell": false,
    //       "is-multiplayer-upsell": false,
    //       "kamaji-relationship": "bundles",
    //       "legal-text": "",
    //       "long-description": "Dijital Deluxe Sürüm içinde şunlar yer alıyor:<br>• Dijital orijinal müzik ve mini sanat kitabı.*<br>• 3 x başıboş motosiklet kaplaması<br>• Erken açılan İngiliz Anahtarı yeteneği<br>• PS4™ dinamik tema.<br><br>BU DÜNYA SENİN İÇİN GELİYOR<br>Başıboş ve ganimet avcısı olan Deacon St. John’la ölümcül bir salgının mahvettiği bir kurtlar sofrasına doğru sür.<br><br>Sadık başıboş motorunla bozuk yoldaki tehlikelere karşı gelirken, aklını yitirmiş vahşi Kaçık sürüleri ve bir o kadar tehlikeli insanlarla yüzleş.<br><br>Tahmin edilmez hava koşulları ve günün farklı zamanları inanılmaz tehlikelere, şok edici sürprizlere ve ölmeni isteyen diğer her şeye gebe olabilir.<br><br>• Vahşi açık dünya: Pasifik Kuzeybatı’nın inanılmaz derecede gerçekçi, devasa ve düşmancıl bölgelerini keşfet.<br>• Vahşi sandbox çatışmaları: Silahlar ve tuzaklar üretirken ve motosikletinizi geliştirirken stratejiler belirleyin.<br>• Sürükleyici hikâye: Derin ve kişisel bir kaybın ardından yaşama tutunacak bir sebep ararken, acımasız doğada hayatta kal.<br><br>*UYARI – MİNİ SANAT KİTABINDA HİKÂYEYİ AÇIK EDEN UNSURLAR BULUNMAKTADIR. HİKÂYE TAMAMLANMADAN AÇMAYIN<br><br> <br><br>Bu ürünün indirilmesi, PlayStation Network Hizmet Koşulları ve Yazılım Kullanım Koşulları ile bu ürün için geçerli olan belirli ek koşullara tabidir. Şartları kabul etmek istemiyorsanız bu ürünü indirmeyin. Diğer önemli bilgiler için bkz. Hizmet Koşulları.<br> Birden fazla PS4 sistemine indirmek için tek seferlik lisans ücreti. Bunu Ana PS4 Sisteminde kullanırken PlayStation Network'de oturum açmanız gerekmezken diğer PS4 sistemlerinde kullanırken oturum açma gereklidir.<br>Bu ürünü kullanmadan önce önemli sağlık bilgileri hakkında bilgi sahibi olmak için Sağlık Uyarıları kısmına bakın.<br />Sony Interactive Entertainment Inc. Yazılım Kütüphanesi  © kullanım hakları Sony Interactive Entertainment Europe kuruluşuna özel olarak lisanslanmıştır ve bu çerçevedeki yazılım kullanım haklarına tabidir. Lisans ve kullanım kurallarının tümüne eu.playstation.com/legal  adresinden ulaşabilirsiniz.",
    //       "macross-brain-context": "game",
    //       "media-list": {
    //         "preview": [],
    //         "promo": {
    //           "images": [],
    //           "videos": []
    //         },
    //         "screenshots": [
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENT1ZkKqYbuDIaCOPwWl2BZ/wYYokTAB_Days Gone Screenshot 1.jpg"
    //           },
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENTRagjDEiKg3Qpm95T47aV/DvofRInw_Days Gone Screenshot 2.jpg"
    //           },
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENTcvyK3FJyQibmXDWBPvNR/bhHalbqN_Days Gone Screenshot 3.jpg"
    //           }
    //         ]
    //       },
    //       "name": "Days Gone™ Dijital Deluxe Sürüm",
    //       "nsx-confirm-message": "",
    //       "parent": {
    //         "id": "EP9000-CUSA09175_00-DAYSGONECOMPLETE",
    //         "name": "Days Gone™",
    //         "thumbnail": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/iVnqsOMfUoq9inoAdtAYLUElvzf7MO6I.png",
    //         "url": "https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/tr/19/EP9000-CUSA09175_00-DAYSGONECOMPLETE/1560236014"
    //       },
    //       "platforms": [
    //         "PS4"
    //       ],
    //       "plus-reward-description": null,
    //       "primary-classification": "PREMIUM_GAME",
    //       "provider-name": "Sony Interactive Entertainment Europe",
    //       "ps-camera-compatibility": "incompatible",
    //       "ps-move-compatibility": "incompatible",
    //       "ps-vr-compatibility": "incompatible",
    //       "release-date": "2019-04-26T00:00:00Z",
    //       "secondary-classification": "GAME",
    //       "skus": [
    //         {
    //           "entitlements": [
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             },
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             },
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             },
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             },
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             }
    //           ],
    //           "id": "EP9000-CUSA09175_00-00000DAYSGONEDLX-E001",
    //           "is-preorder": false,
    //           "multibuy": null,
    //           "name": "Tam Oyun",
    //           "playability-date": "",
    //           "plus-reward-description": null,
    //           "prices": {
    //             "non-plus-user": {
    //               "actual-price": {
    //                 "display": "259,00 TL",
    //                 "value": 25900
    //               },
    //               "availability": {
    //                 "end-date": "2019-06-17T22:59:00Z",
    //                 "start-date": "2019-06-07T00:00:00Z"
    //               },
    //               "discount-percentage": 47,
    //               "is-plus": false,
    //               "strikethrough-price": {
    //                 "display": "489,00 TL",
    //                 "value": 48900
    //               },
    //               "upsell-price": {
    //                 "display": "234,55 TL",
    //                 "value": 23455
    //               }
    //             },
    //             "plus-user": {
    //               "actual-price": {
    //                 "display": "234,55 TL",
    //                 "value": 23455
    //               },
    //               "availability": {
    //                 "end-date": "2019-06-17T22:59:00Z",
    //                 "start-date": "2019-06-07T00:00:00Z"
    //               },
    //               "discount-percentage": 52,
    //               "is-plus": true,
    //               "strikethrough-price": {
    //                 "display": "489,00 TL",
    //                 "value": 48900
    //               },
    //               "upsell-price": null
    //             }
    //           }
    //         }
    //       ],
    //       "star-rating": {
    //         "score": 4.73,
    //         "total": 370
    //       },
    //       "subtitle-language-codes": [
    //         {
    //           "codes": [
    //             "de",
    //             "no",
    //             "fi",
    //             "sv",
    //             "pt",
    //             "en",
    //             "it",
    //             "fr",
    //             "da",
    //             "es",
    //             "tr",
    //             "nl"
    //           ],
    //           "name": "DAYS GONE"
    //         }
    //       ],
    //       "tertiary-classification": "BUNDLE",
    //       "thumbnail-url-base": "https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/tr/19/EP9000-CUSA09175_00-00000DAYSGONEDLX/1560236133000/image",
    //       "top-category": "downloadable_game",
    //       "upsell-info": {
    //         "discount-percentage-difference": 5,
    //         "display-price": "234,55 TL",
    //         "is-free": false,
    //         "type": "save-extra-percentage"
    //       },
    //       "voice-language-codes": [
    //         {
    //           "codes": [
    //             "de",
    //             "pt",
    //             "en",
    //             "it",
    //             "fr",
    //             "es"
    //           ],
    //           "name": "DAYS GONE"
    //         }
    //       ]
    //     },
    //     "id": "EP9000-CUSA09175_00-00000DAYSGONEDLX",
    //     "relationships": {
    //       "children": {
    //         "data": []
    //       },
    //       "legacy-skus": {
    //         "data": [
    //           {
    //             "id": "EP9000-CUSA09175_00-00000DAYSGONEDLX-E001",
    //             "type": "legacy-sku"
    //           }
    //         ]
    //       }
    //     },
    //     "type": "game"
    //   },
    //   {
    //     "attributes": {
    //       "badge-info": {
    //         "non-plus-user": {
    //           "discount-percentage": 48,
    //           "is-plus": false,
    //           "type": "save-percentage"
    //         },
    //         "plus-user": {
    //           "discount-percentage": 53,
    //           "is-plus": true,
    //           "type": "save-percentage"
    //         }
    //       },
    //       "cero-z-status": {
    //         "is-allowed-in-cart": false,
    //         "is-on": false
    //       },
    //       "content-rating": {
    //         "content-descriptors": [
    //           {
    //             "description": "Language",
    //             "name": "Language",
    //             "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/descriptors/sd/pegi/language.png"
    //           },
    //           {
    //             "description": "Violence",
    //             "name": "Violence",
    //             "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/descriptors/sd/pegi/violence.png"
    //           }
    //         ],
    //         "contentInteractiveElement": [],
    //         "rating-system": "PEGI",
    //         "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/ratings/hd/pegi/18.png"
    //       },
    //       "content-type": "1",
    //       "default-sku-id": "EP9000-CUSA09175_00-DAYSGONECOMPLETE-E001",
    //       "dob-required": false,
    //       "file-size": {
    //         "unit": "GB",
    //         "value": 43.14
    //       },
    //       "game-content-type": "Tam Oyun",
    //       "genres": [
    //         "Aksiyon"
    //       ],
    //       "is-igc-upsell": false,
    //       "is-multiplayer-upsell": false,
    //       "kamaji-relationship": "extras",
    //       "legal-text": "",
    //       "long-description": "BU DÜNYA SENİN İÇİN GELİYOR<br>Başıboş ve ganimet avcısı olan Deacon St. John’la ölümcül bir salgının mahvettiği bir kurtlar sofrasına doğru sür.<br><br>Sadık başıboş motorunla bozuk yoldaki tehlikelere karşı gelirken, aklını yitirmiş vahşi Kaçık sürüleri ve bir o kadar tehlikeli insanlarla yüzleş.<br><br>Tahmin edilmez hava koşulları ve günün farklı zamanları inanılmaz tehlikelere, şok edici sürprizlere ve ölmeni isteyen diğer her şeye gebe olabilir.<br><br>• Vahşi açık dünya: Pasifik Kuzeybatı’nın inanılmaz derecede gerçekçi, devasa ve düşmancıl bölgelerini keşfet.<br>• Sert ve açık uçlu çatışmalar: Silahlarını ve yeteneklerini özelleştirerek, tuzak üreterek ve motosikletini geliştirerek stratejilerini belirle.<br>• Sürükleyici hikâye: Derin ve kişisel bir kaybın ardından yaşama tutunacak bir sebep ararken, acımasız doğada hayatta kal.<br><br>HDTV ekran çözünürlüğü: 720p,1080i,1080p<br><br>Bu ürünün indirilmesi, PlayStation Network Hizmet Koşulları ve Yazılım Kullanım Koşulları ile bu ürün için geçerli olan belirli ek koşullara tabidir. Şartları kabul etmek istemiyorsanız bu ürünü indirmeyin. Diğer önemli bilgiler için bkz. Hizmet Koşulları.<br> Birden fazla PS4 sistemine indirmek için tek seferlik lisans ücreti. Bunu Ana PS4 Sisteminde kullanırken PlayStation Network'de oturum açmanız gerekmezken diğer PS4 sistemlerinde kullanırken oturum açma gereklidir.<br>Bu ürünü kullanmadan önce önemli sağlık bilgileri hakkında bilgi sahibi olmak için Sağlık Uyarıları kısmına bakın.<br />Sony Interactive Entertainment Inc. Yazılım Kütüphanesi  © kullanım hakları Sony Interactive Entertainment Europe kuruluşuna özel olarak lisanslanmıştır ve bu çerçevedeki yazılım kullanım haklarına tabidir. Lisans ve kullanım kurallarının tümüne eu.playstation.com/legal  adresinden ulaşabilirsiniz.",
    //       "macross-brain-context": "game",
    //       "media-list": {
    //         "preview": [],
    //         "promo": {
    //           "images": [],
    //           "videos": []
    //         },
    //         "screenshots": [
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENThfa7x5pXHJXAAzQI4CjZ/uPjRoKPB_Days Gone Screenshot 1.jpg"
    //           },
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENTJOf7SNrCc7VfrfxfiyaJ/rtTiYpTi_Days Gone Screenshot 2.jpg"
    //           },
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENTObkOxWI2vzS2ftXO94Cl/LcdvNXJC_Days Gone Screenshot 3.jpg"
    //           }
    //         ]
    //       },
    //       "name": "Days Gone™",
    //       "nsx-confirm-message": "",
    //       "parent": null,
    //       "platforms": [
    //         "PS4"
    //       ],
    //       "plus-reward-description": null,
    //       "primary-classification": "PREMIUM_GAME",
    //       "provider-name": "Sony Interactive Entertainment Europe",
    //       "ps-camera-compatibility": "incompatible",
    //       "ps-move-compatibility": "incompatible",
    //       "ps-vr-compatibility": "incompatible",
    //       "release-date": "2019-04-26T00:00:00Z",
    //       "secondary-classification": "GAME",
    //       "skus": [
    //         {
    //           "entitlements": [
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             },
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             }
    //           ],
    //           "id": "EP9000-CUSA09175_00-DAYSGONECOMPLETE-E001",
    //           "is-preorder": false,
    //           "multibuy": null,
    //           "name": "Tam Oyun",
    //           "playability-date": "",
    //           "plus-reward-description": null,
    //           "prices": {
    //             "non-plus-user": {
    //               "actual-price": {
    //                 "display": "219,00 TL",
    //                 "value": 21900
    //               },
    //               "availability": {
    //                 "end-date": "2019-06-17T22:59:00Z",
    //                 "start-date": "2019-06-07T00:00:00Z"
    //               },
    //               "discount-percentage": 48,
    //               "is-plus": false,
    //               "strikethrough-price": {
    //                 "display": "429,00 TL",
    //                 "value": 42900
    //               },
    //               "upsell-price": {
    //                 "display": "197,55 TL",
    //                 "value": 19755
    //               }
    //             },
    //             "plus-user": {
    //               "actual-price": {
    //                 "display": "197,55 TL",
    //                 "value": 19755
    //               },
    //               "availability": {
    //                 "end-date": "2019-06-17T22:59:00Z",
    //                 "start-date": "2019-06-07T00:00:00Z"
    //               },
    //               "discount-percentage": 53,
    //               "is-plus": true,
    //               "strikethrough-price": {
    //                 "display": "429,00 TL",
    //                 "value": 42900
    //               },
    //               "upsell-price": null
    //             }
    //           }
    //         }
    //       ],
    //       "star-rating": {
    //         "score": 4.53,
    //         "total": 3699
    //       },
    //       "subtitle-language-codes": [
    //         {
    //           "codes": [
    //             "de",
    //             "no",
    //             "fi",
    //             "sv",
    //             "pt",
    //             "en",
    //             "it",
    //             "fr",
    //             "da",
    //             "es",
    //             "tr",
    //             "nl"
    //           ],
    //           "name": "DAYS GONE"
    //         }
    //       ],
    //       "tertiary-classification": "NA",
    //       "thumbnail-url-base": "https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/tr/19/EP9000-CUSA09175_00-DAYSGONECOMPLETE/1560236014000/image",
    //       "top-category": "downloadable_game",
    //       "upsell-info": {
    //         "discount-percentage-difference": 5,
    //         "display-price": "197,55 TL",
    //         "is-free": false,
    //         "type": "save-extra-percentage"
    //       },
    //       "voice-language-codes": [
    //         {
    //           "codes": [
    //             "de",
    //             "pt",
    //             "en",
    //             "it",
    //             "fr",
    //             "es"
    //           ],
    //           "name": "DAYS GONE"
    //         }
    //       ]
    //     },
    //     "id": "EP9000-CUSA09175_00-DAYSGONECOMPLETE",
    //     "relationships": {
    //       "children": {
    //         "data": [
    //           {
    //             "id": "EP9000-CUSA09175_00-00000DAYSGONEDLX",
    //             "type": "game"
    //           }
    //         ]
    //       },
    //       "legacy-skus": {
    //         "data": [
    //           {
    //             "id": "EP9000-CUSA09175_00-DAYSGONECOMPLETE-E001",
    //             "type": "legacy-sku"
    //           }
    //         ]
    //       }
    //     },
    //     "type": "game"
    //   },
    //   {
    //     "attributes": {
    //       "badge-info": {
    //         "non-plus-user": {
    //           "discount-percentage": 47,
    //           "is-plus": false,
    //           "type": "save-percentage"
    //         },
    //         "plus-user": {
    //           "discount-percentage": 52,
    //           "is-plus": true,
    //           "type": "save-percentage"
    //         }
    //       },
    //       "cero-z-status": {
    //         "is-allowed-in-cart": false,
    //         "is-on": false
    //       },
    //       "content-rating": {
    //         "content-descriptors": [
    //           {
    //             "description": "Language",
    //             "name": "Language",
    //             "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/descriptors/sd/pegi/language.png"
    //           },
    //           {
    //             "description": "Violence",
    //             "name": "Violence",
    //             "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/descriptors/sd/pegi/violence.png"
    //           }
    //         ],
    //         "contentInteractiveElement": [],
    //         "rating-system": "PEGI",
    //         "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/ratings/hd/pegi/18.png"
    //       },
    //       "content-type": "1",
    //       "default-sku-id": "EP9000-CUSA09175_00-00000DAYSGONEDLX-E001",
    //       "dob-required": false,
    //       "file-size": {
    //         "unit": "GB",
    //         "value": 47.35
    //       },
    //       "game-content-type": "Paket",
    //       "genres": [
    //         "Aksiyon",
    //         "Macera"
    //       ],
    //       "is-igc-upsell": false,
    //       "is-multiplayer-upsell": false,
    //       "kamaji-relationship": "bundles",
    //       "legal-text": "",
    //       "long-description": "Dijital Deluxe Sürüm içinde şunlar yer alıyor:<br>• Dijital orijinal müzik ve mini sanat kitabı.*<br>• 3 x başıboş motosiklet kaplaması<br>• Erken açılan İngiliz Anahtarı yeteneği<br>• PS4™ dinamik tema.<br><br>BU DÜNYA SENİN İÇİN GELİYOR<br>Başıboş ve ganimet avcısı olan Deacon St. John’la ölümcül bir salgının mahvettiği bir kurtlar sofrasına doğru sür.<br><br>Sadık başıboş motorunla bozuk yoldaki tehlikelere karşı gelirken, aklını yitirmiş vahşi Kaçık sürüleri ve bir o kadar tehlikeli insanlarla yüzleş.<br><br>Tahmin edilmez hava koşulları ve günün farklı zamanları inanılmaz tehlikelere, şok edici sürprizlere ve ölmeni isteyen diğer her şeye gebe olabilir.<br><br>• Vahşi açık dünya: Pasifik Kuzeybatı’nın inanılmaz derecede gerçekçi, devasa ve düşmancıl bölgelerini keşfet.<br>• Vahşi sandbox çatışmaları: Silahlar ve tuzaklar üretirken ve motosikletinizi geliştirirken stratejiler belirleyin.<br>• Sürükleyici hikâye: Derin ve kişisel bir kaybın ardından yaşama tutunacak bir sebep ararken, acımasız doğada hayatta kal.<br><br>*UYARI – MİNİ SANAT KİTABINDA HİKÂYEYİ AÇIK EDEN UNSURLAR BULUNMAKTADIR. HİKÂYE TAMAMLANMADAN AÇMAYIN<br><br> <br><br>Bu ürünün indirilmesi, PlayStation Network Hizmet Koşulları ve Yazılım Kullanım Koşulları ile bu ürün için geçerli olan belirli ek koşullara tabidir. Şartları kabul etmek istemiyorsanız bu ürünü indirmeyin. Diğer önemli bilgiler için bkz. Hizmet Koşulları.<br> Birden fazla PS4 sistemine indirmek için tek seferlik lisans ücreti. Bunu Ana PS4 Sisteminde kullanırken PlayStation Network'de oturum açmanız gerekmezken diğer PS4 sistemlerinde kullanırken oturum açma gereklidir.<br>Bu ürünü kullanmadan önce önemli sağlık bilgileri hakkında bilgi sahibi olmak için Sağlık Uyarıları kısmına bakın.<br />Sony Interactive Entertainment Inc. Yazılım Kütüphanesi  © kullanım hakları Sony Interactive Entertainment Europe kuruluşuna özel olarak lisanslanmıştır ve bu çerçevedeki yazılım kullanım haklarına tabidir. Lisans ve kullanım kurallarının tümüne eu.playstation.com/legal  adresinden ulaşabilirsiniz.",
    //       "macross-brain-context": "game",
    //       "media-list": {
    //         "preview": [],
    //         "promo": {
    //           "images": [],
    //           "videos": []
    //         },
    //         "screenshots": [
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENT1ZkKqYbuDIaCOPwWl2BZ/wYYokTAB_Days Gone Screenshot 1.jpg"
    //           },
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENTRagjDEiKg3Qpm95T47aV/DvofRInw_Days Gone Screenshot 2.jpg"
    //           },
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENTcvyK3FJyQibmXDWBPvNR/bhHalbqN_Days Gone Screenshot 3.jpg"
    //           }
    //         ]
    //       },
    //       "name": "Days Gone™ Dijital Deluxe Sürüm",
    //       "nsx-confirm-message": "",
    //       "parent": {
    //         "id": "EP9000-CUSA09175_00-DAYSGONECOMPLETE",
    //         "name": "Days Gone™",
    //         "thumbnail": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/iVnqsOMfUoq9inoAdtAYLUElvzf7MO6I.png",
    //         "url": "https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/tr/19/EP9000-CUSA09175_00-DAYSGONECOMPLETE/1560236014"
    //       },
    //       "platforms": [
    //         "PS4"
    //       ],
    //       "plus-reward-description": null,
    //       "primary-classification": "PREMIUM_GAME",
    //       "provider-name": "Sony Interactive Entertainment Europe",
    //       "ps-camera-compatibility": "incompatible",
    //       "ps-move-compatibility": "incompatible",
    //       "ps-vr-compatibility": "incompatible",
    //       "release-date": "2019-04-26T00:00:00Z",
    //       "secondary-classification": "GAME",
    //       "skus": [
    //         {
    //           "entitlements": [
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             },
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             },
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             },
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             },
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             }
    //           ],
    //           "id": "EP9000-CUSA09175_00-00000DAYSGONEDLX-E001",
    //           "is-preorder": false,
    //           "multibuy": null,
    //           "name": "Tam Oyun",
    //           "playability-date": "",
    //           "plus-reward-description": null,
    //           "prices": {
    //             "non-plus-user": {
    //               "actual-price": {
    //                 "display": "259,00 TL",
    //                 "value": 25900
    //               },
    //               "availability": {
    //                 "end-date": "2019-06-17T22:59:00Z",
    //                 "start-date": "2019-06-07T00:00:00Z"
    //               },
    //               "discount-percentage": 47,
    //               "is-plus": false,
    //               "strikethrough-price": {
    //                 "display": "489,00 TL",
    //                 "value": 48900
    //               },
    //               "upsell-price": {
    //                 "display": "234,55 TL",
    //                 "value": 23455
    //               }
    //             },
    //             "plus-user": {
    //               "actual-price": {
    //                 "display": "234,55 TL",
    //                 "value": 23455
    //               },
    //               "availability": {
    //                 "end-date": "2019-06-17T22:59:00Z",
    //                 "start-date": "2019-06-07T00:00:00Z"
    //               },
    //               "discount-percentage": 52,
    //               "is-plus": true,
    //               "strikethrough-price": {
    //                 "display": "489,00 TL",
    //                 "value": 48900
    //               },
    //               "upsell-price": null
    //             }
    //           }
    //         }
    //       ],
    //       "star-rating": {
    //         "score": 4.73,
    //         "total": 370
    //       },
    //       "subtitle-language-codes": [
    //         {
    //           "codes": [
    //             "de",
    //             "no",
    //             "fi",
    //             "sv",
    //             "pt",
    //             "en",
    //             "it",
    //             "fr",
    //             "da",
    //             "es",
    //             "tr",
    //             "nl"
    //           ],
    //           "name": "DAYS GONE"
    //         }
    //       ],
    //       "tertiary-classification": "BUNDLE",
    //       "thumbnail-url-base": "https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/tr/19/EP9000-CUSA09175_00-00000DAYSGONEDLX/1560236133000/image",
    //       "top-category": "downloadable_game",
    //       "upsell-info": {
    //         "discount-percentage-difference": 5,
    //         "display-price": "234,55 TL",
    //         "is-free": false,
    //         "type": "save-extra-percentage"
    //       },
    //       "voice-language-codes": [
    //         {
    //           "codes": [
    //             "de",
    //             "pt",
    //             "en",
    //             "it",
    //             "fr",
    //             "es"
    //           ],
    //           "name": "DAYS GONE"
    //         }
    //       ]
    //     },
    //     "id": "EP9000-CUSA09175_00-00000DAYSGONEDLX",
    //     "relationships": {
    //       "children": {
    //         "data": []
    //       },
    //       "legacy-skus": {
    //         "data": [
    //           {
    //             "id": "EP9000-CUSA09175_00-00000DAYSGONEDLX-E001",
    //             "type": "legacy-sku"
    //           }
    //         ]
    //       }
    //     },
    //     "type": "game"
    //   },
    //   {
    //     "attributes": {
    //       "badge-info": {
    //         "non-plus-user": {
    //           "discount-percentage": 48,
    //           "is-plus": false,
    //           "type": "save-percentage"
    //         },
    //         "plus-user": {
    //           "discount-percentage": 53,
    //           "is-plus": true,
    //           "type": "save-percentage"
    //         }
    //       },
    //       "cero-z-status": {
    //         "is-allowed-in-cart": false,
    //         "is-on": false
    //       },
    //       "content-rating": {
    //         "content-descriptors": [
    //           {
    //             "description": "Language",
    //             "name": "Language",
    //             "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/descriptors/sd/pegi/language.png"
    //           },
    //           {
    //             "description": "Violence",
    //             "name": "Violence",
    //             "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/descriptors/sd/pegi/violence.png"
    //           }
    //         ],
    //         "contentInteractiveElement": [],
    //         "rating-system": "PEGI",
    //         "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/ratings/hd/pegi/18.png"
    //       },
    //       "content-type": "1",
    //       "default-sku-id": "EP9000-CUSA09175_00-DAYSGONECOMPLETE-E001",
    //       "dob-required": false,
    //       "file-size": {
    //         "unit": "GB",
    //         "value": 43.14
    //       },
    //       "game-content-type": "Tam Oyun",
    //       "genres": [
    //         "Aksiyon"
    //       ],
    //       "is-igc-upsell": false,
    //       "is-multiplayer-upsell": false,
    //       "kamaji-relationship": "extras",
    //       "legal-text": "",
    //       "long-description": "BU DÜNYA SENİN İÇİN GELİYOR<br>Başıboş ve ganimet avcısı olan Deacon St. John’la ölümcül bir salgının mahvettiği bir kurtlar sofrasına doğru sür.<br><br>Sadık başıboş motorunla bozuk yoldaki tehlikelere karşı gelirken, aklını yitirmiş vahşi Kaçık sürüleri ve bir o kadar tehlikeli insanlarla yüzleş.<br><br>Tahmin edilmez hava koşulları ve günün farklı zamanları inanılmaz tehlikelere, şok edici sürprizlere ve ölmeni isteyen diğer her şeye gebe olabilir.<br><br>• Vahşi açık dünya: Pasifik Kuzeybatı’nın inanılmaz derecede gerçekçi, devasa ve düşmancıl bölgelerini keşfet.<br>• Sert ve açık uçlu çatışmalar: Silahlarını ve yeteneklerini özelleştirerek, tuzak üreterek ve motosikletini geliştirerek stratejilerini belirle.<br>• Sürükleyici hikâye: Derin ve kişisel bir kaybın ardından yaşama tutunacak bir sebep ararken, acımasız doğada hayatta kal.<br><br>HDTV ekran çözünürlüğü: 720p,1080i,1080p<br><br>Bu ürünün indirilmesi, PlayStation Network Hizmet Koşulları ve Yazılım Kullanım Koşulları ile bu ürün için geçerli olan belirli ek koşullara tabidir. Şartları kabul etmek istemiyorsanız bu ürünü indirmeyin. Diğer önemli bilgiler için bkz. Hizmet Koşulları.<br> Birden fazla PS4 sistemine indirmek için tek seferlik lisans ücreti. Bunu Ana PS4 Sisteminde kullanırken PlayStation Network'de oturum açmanız gerekmezken diğer PS4 sistemlerinde kullanırken oturum açma gereklidir.<br>Bu ürünü kullanmadan önce önemli sağlık bilgileri hakkında bilgi sahibi olmak için Sağlık Uyarıları kısmına bakın.<br />Sony Interactive Entertainment Inc. Yazılım Kütüphanesi  © kullanım hakları Sony Interactive Entertainment Europe kuruluşuna özel olarak lisanslanmıştır ve bu çerçevedeki yazılım kullanım haklarına tabidir. Lisans ve kullanım kurallarının tümüne eu.playstation.com/legal  adresinden ulaşabilirsiniz.",
    //       "macross-brain-context": "game",
    //       "media-list": {
    //         "preview": [],
    //         "promo": {
    //           "images": [],
    //           "videos": []
    //         },
    //         "screenshots": [
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENThfa7x5pXHJXAAzQI4CjZ/uPjRoKPB_Days Gone Screenshot 1.jpg"
    //           },
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENTJOf7SNrCc7VfrfxfiyaJ/rtTiYpTi_Days Gone Screenshot 2.jpg"
    //           },
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENTObkOxWI2vzS2ftXO94Cl/LcdvNXJC_Days Gone Screenshot 3.jpg"
    //           }
    //         ]
    //       },
    //       "name": "Days Gone™",
    //       "nsx-confirm-message": "",
    //       "parent": null,
    //       "platforms": [
    //         "PS4"
    //       ],
    //       "plus-reward-description": null,
    //       "primary-classification": "PREMIUM_GAME",
    //       "provider-name": "Sony Interactive Entertainment Europe",
    //       "ps-camera-compatibility": "incompatible",
    //       "ps-move-compatibility": "incompatible",
    //       "ps-vr-compatibility": "incompatible",
    //       "release-date": "2019-04-26T00:00:00Z",
    //       "secondary-classification": "GAME",
    //       "skus": [
    //         {
    //           "entitlements": [
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             },
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             }
    //           ],
    //           "id": "EP9000-CUSA09175_00-DAYSGONECOMPLETE-E001",
    //           "is-preorder": false,
    //           "multibuy": null,
    //           "name": "Tam Oyun",
    //           "playability-date": "",
    //           "plus-reward-description": null,
    //           "prices": {
    //             "non-plus-user": {
    //               "actual-price": {
    //                 "display": "219,00 TL",
    //                 "value": 21900
    //               },
    //               "availability": {
    //                 "end-date": "2019-06-17T22:59:00Z",
    //                 "start-date": "2019-06-07T00:00:00Z"
    //               },
    //               "discount-percentage": 48,
    //               "is-plus": false,
    //               "strikethrough-price": {
    //                 "display": "429,00 TL",
    //                 "value": 42900
    //               },
    //               "upsell-price": {
    //                 "display": "197,55 TL",
    //                 "value": 19755
    //               }
    //             },
    //             "plus-user": {
    //               "actual-price": {
    //                 "display": "197,55 TL",
    //                 "value": 19755
    //               },
    //               "availability": {
    //                 "end-date": "2019-06-17T22:59:00Z",
    //                 "start-date": "2019-06-07T00:00:00Z"
    //               },
    //               "discount-percentage": 53,
    //               "is-plus": true,
    //               "strikethrough-price": {
    //                 "display": "429,00 TL",
    //                 "value": 42900
    //               },
    //               "upsell-price": null
    //             }
    //           }
    //         }
    //       ],
    //       "star-rating": {
    //         "score": 4.53,
    //         "total": 3699
    //       },
    //       "subtitle-language-codes": [
    //         {
    //           "codes": [
    //             "de",
    //             "no",
    //             "fi",
    //             "sv",
    //             "pt",
    //             "en",
    //             "it",
    //             "fr",
    //             "da",
    //             "es",
    //             "tr",
    //             "nl"
    //           ],
    //           "name": "DAYS GONE"
    //         }
    //       ],
    //       "tertiary-classification": "NA",
    //       "thumbnail-url-base": "https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/tr/19/EP9000-CUSA09175_00-DAYSGONECOMPLETE/1560236014000/image",
    //       "top-category": "downloadable_game",
    //       "upsell-info": {
    //         "discount-percentage-difference": 5,
    //         "display-price": "197,55 TL",
    //         "is-free": false,
    //         "type": "save-extra-percentage"
    //       },
    //       "voice-language-codes": [
    //         {
    //           "codes": [
    //             "de",
    //             "pt",
    //             "en",
    //             "it",
    //             "fr",
    //             "es"
    //           ],
    //           "name": "DAYS GONE"
    //         }
    //       ]
    //     },
    //     "id": "EP9000-CUSA09175_00-DAYSGONECOMPLETE",
    //     "relationships": {
    //       "children": {
    //         "data": [
    //           {
    //             "id": "EP9000-CUSA09175_00-00000DAYSGONEDLX",
    //             "type": "game"
    //           }
    //         ]
    //       },
    //       "legacy-skus": {
    //         "data": [
    //           {
    //             "id": "EP9000-CUSA09175_00-DAYSGONECOMPLETE-E001",
    //             "type": "legacy-sku"
    //           }
    //         ]
    //       }
    //     },
    //     "type": "game"
    //   },
    //   {
    //     "attributes": {
    //       "badge-info": {
    //         "non-plus-user": {
    //           "discount-percentage": 47,
    //           "is-plus": false,
    //           "type": "save-percentage"
    //         },
    //         "plus-user": {
    //           "discount-percentage": 52,
    //           "is-plus": true,
    //           "type": "save-percentage"
    //         }
    //       },
    //       "cero-z-status": {
    //         "is-allowed-in-cart": false,
    //         "is-on": false
    //       },
    //       "content-rating": {
    //         "content-descriptors": [
    //           {
    //             "description": "Language",
    //             "name": "Language",
    //             "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/descriptors/sd/pegi/language.png"
    //           },
    //           {
    //             "description": "Violence",
    //             "name": "Violence",
    //             "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/descriptors/sd/pegi/violence.png"
    //           }
    //         ],
    //         "contentInteractiveElement": [],
    //         "rating-system": "PEGI",
    //         "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/ratings/hd/pegi/18.png"
    //       },
    //       "content-type": "1",
    //       "default-sku-id": "EP9000-CUSA09175_00-00000DAYSGONEDLX-E001",
    //       "dob-required": false,
    //       "file-size": {
    //         "unit": "GB",
    //         "value": 47.35
    //       },
    //       "game-content-type": "Paket",
    //       "genres": [
    //         "Aksiyon",
    //         "Macera"
    //       ],
    //       "is-igc-upsell": false,
    //       "is-multiplayer-upsell": false,
    //       "kamaji-relationship": "bundles",
    //       "legal-text": "",
    //       "long-description": "Dijital Deluxe Sürüm içinde şunlar yer alıyor:<br>• Dijital orijinal müzik ve mini sanat kitabı.*<br>• 3 x başıboş motosiklet kaplaması<br>• Erken açılan İngiliz Anahtarı yeteneği<br>• PS4™ dinamik tema.<br><br>BU DÜNYA SENİN İÇİN GELİYOR<br>Başıboş ve ganimet avcısı olan Deacon St. John’la ölümcül bir salgının mahvettiği bir kurtlar sofrasına doğru sür.<br><br>Sadık başıboş motorunla bozuk yoldaki tehlikelere karşı gelirken, aklını yitirmiş vahşi Kaçık sürüleri ve bir o kadar tehlikeli insanlarla yüzleş.<br><br>Tahmin edilmez hava koşulları ve günün farklı zamanları inanılmaz tehlikelere, şok edici sürprizlere ve ölmeni isteyen diğer her şeye gebe olabilir.<br><br>• Vahşi açık dünya: Pasifik Kuzeybatı’nın inanılmaz derecede gerçekçi, devasa ve düşmancıl bölgelerini keşfet.<br>• Vahşi sandbox çatışmaları: Silahlar ve tuzaklar üretirken ve motosikletinizi geliştirirken stratejiler belirleyin.<br>• Sürükleyici hikâye: Derin ve kişisel bir kaybın ardından yaşama tutunacak bir sebep ararken, acımasız doğada hayatta kal.<br><br>*UYARI – MİNİ SANAT KİTABINDA HİKÂYEYİ AÇIK EDEN UNSURLAR BULUNMAKTADIR. HİKÂYE TAMAMLANMADAN AÇMAYIN<br><br> <br><br>Bu ürünün indirilmesi, PlayStation Network Hizmet Koşulları ve Yazılım Kullanım Koşulları ile bu ürün için geçerli olan belirli ek koşullara tabidir. Şartları kabul etmek istemiyorsanız bu ürünü indirmeyin. Diğer önemli bilgiler için bkz. Hizmet Koşulları.<br> Birden fazla PS4 sistemine indirmek için tek seferlik lisans ücreti. Bunu Ana PS4 Sisteminde kullanırken PlayStation Network'de oturum açmanız gerekmezken diğer PS4 sistemlerinde kullanırken oturum açma gereklidir.<br>Bu ürünü kullanmadan önce önemli sağlık bilgileri hakkında bilgi sahibi olmak için Sağlık Uyarıları kısmına bakın.<br />Sony Interactive Entertainment Inc. Yazılım Kütüphanesi  © kullanım hakları Sony Interactive Entertainment Europe kuruluşuna özel olarak lisanslanmıştır ve bu çerçevedeki yazılım kullanım haklarına tabidir. Lisans ve kullanım kurallarının tümüne eu.playstation.com/legal  adresinden ulaşabilirsiniz.",
    //       "macross-brain-context": "game",
    //       "media-list": {
    //         "preview": [],
    //         "promo": {
    //           "images": [],
    //           "videos": []
    //         },
    //         "screenshots": [
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENT1ZkKqYbuDIaCOPwWl2BZ/wYYokTAB_Days Gone Screenshot 1.jpg"
    //           },
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENTRagjDEiKg3Qpm95T47aV/DvofRInw_Days Gone Screenshot 2.jpg"
    //           },
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENTcvyK3FJyQibmXDWBPvNR/bhHalbqN_Days Gone Screenshot 3.jpg"
    //           }
    //         ]
    //       },
    //       "name": "Days Gone™ Dijital Deluxe Sürüm",
    //       "nsx-confirm-message": "",
    //       "parent": {
    //         "id": "EP9000-CUSA09175_00-DAYSGONECOMPLETE",
    //         "name": "Days Gone™",
    //         "thumbnail": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/iVnqsOMfUoq9inoAdtAYLUElvzf7MO6I.png",
    //         "url": "https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/tr/19/EP9000-CUSA09175_00-DAYSGONECOMPLETE/1560236014"
    //       },
    //       "platforms": [
    //         "PS4"
    //       ],
    //       "plus-reward-description": null,
    //       "primary-classification": "PREMIUM_GAME",
    //       "provider-name": "Sony Interactive Entertainment Europe",
    //       "ps-camera-compatibility": "incompatible",
    //       "ps-move-compatibility": "incompatible",
    //       "ps-vr-compatibility": "incompatible",
    //       "release-date": "2019-04-26T00:00:00Z",
    //       "secondary-classification": "GAME",
    //       "skus": [
    //         {
    //           "entitlements": [
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             },
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             },
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             },
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             },
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             }
    //           ],
    //           "id": "EP9000-CUSA09175_00-00000DAYSGONEDLX-E001",
    //           "is-preorder": false,
    //           "multibuy": null,
    //           "name": "Tam Oyun",
    //           "playability-date": "",
    //           "plus-reward-description": null,
    //           "prices": {
    //             "non-plus-user": {
    //               "actual-price": {
    //                 "display": "259,00 TL",
    //                 "value": 25900
    //               },
    //               "availability": {
    //                 "end-date": "2019-06-17T22:59:00Z",
    //                 "start-date": "2019-06-07T00:00:00Z"
    //               },
    //               "discount-percentage": 47,
    //               "is-plus": false,
    //               "strikethrough-price": {
    //                 "display": "489,00 TL",
    //                 "value": 48900
    //               },
    //               "upsell-price": {
    //                 "display": "234,55 TL",
    //                 "value": 23455
    //               }
    //             },
    //             "plus-user": {
    //               "actual-price": {
    //                 "display": "234,55 TL",
    //                 "value": 23455
    //               },
    //               "availability": {
    //                 "end-date": "2019-06-17T22:59:00Z",
    //                 "start-date": "2019-06-07T00:00:00Z"
    //               },
    //               "discount-percentage": 52,
    //               "is-plus": true,
    //               "strikethrough-price": {
    //                 "display": "489,00 TL",
    //                 "value": 48900
    //               },
    //               "upsell-price": null
    //             }
    //           }
    //         }
    //       ],
    //       "star-rating": {
    //         "score": 4.73,
    //         "total": 370
    //       },
    //       "subtitle-language-codes": [
    //         {
    //           "codes": [
    //             "de",
    //             "no",
    //             "fi",
    //             "sv",
    //             "pt",
    //             "en",
    //             "it",
    //             "fr",
    //             "da",
    //             "es",
    //             "tr",
    //             "nl"
    //           ],
    //           "name": "DAYS GONE"
    //         }
    //       ],
    //       "tertiary-classification": "BUNDLE",
    //       "thumbnail-url-base": "https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/tr/19/EP9000-CUSA09175_00-00000DAYSGONEDLX/1560236133000/image",
    //       "top-category": "downloadable_game",
    //       "upsell-info": {
    //         "discount-percentage-difference": 5,
    //         "display-price": "234,55 TL",
    //         "is-free": false,
    //         "type": "save-extra-percentage"
    //       },
    //       "voice-language-codes": [
    //         {
    //           "codes": [
    //             "de",
    //             "pt",
    //             "en",
    //             "it",
    //             "fr",
    //             "es"
    //           ],
    //           "name": "DAYS GONE"
    //         }
    //       ]
    //     },
    //     "id": "EP9000-CUSA09175_00-00000DAYSGONEDLX",
    //     "relationships": {
    //       "children": {
    //         "data": []
    //       },
    //       "legacy-skus": {
    //         "data": [
    //           {
    //             "id": "EP9000-CUSA09175_00-00000DAYSGONEDLX-E001",
    //             "type": "legacy-sku"
    //           }
    //         ]
    //       }
    //     },
    //     "type": "game"
    //   },
    //   {
    //     "attributes": {
    //       "badge-info": {
    //         "non-plus-user": {
    //           "discount-percentage": 48,
    //           "is-plus": false,
    //           "type": "save-percentage"
    //         },
    //         "plus-user": {
    //           "discount-percentage": 53,
    //           "is-plus": true,
    //           "type": "save-percentage"
    //         }
    //       },
    //       "cero-z-status": {
    //         "is-allowed-in-cart": false,
    //         "is-on": false
    //       },
    //       "content-rating": {
    //         "content-descriptors": [
    //           {
    //             "description": "Language",
    //             "name": "Language",
    //             "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/descriptors/sd/pegi/language.png"
    //           },
    //           {
    //             "description": "Violence",
    //             "name": "Violence",
    //             "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/descriptors/sd/pegi/violence.png"
    //           }
    //         ],
    //         "contentInteractiveElement": [],
    //         "rating-system": "PEGI",
    //         "url": "https://cdn-a.sonyentertainmentnetwork.com/grc/images/ratings/hd/pegi/18.png"
    //       },
    //       "content-type": "1",
    //       "default-sku-id": "EP9000-CUSA09175_00-DAYSGONECOMPLETE-E001",
    //       "dob-required": false,
    //       "file-size": {
    //         "unit": "GB",
    //         "value": 43.14
    //       },
    //       "game-content-type": "Tam Oyun",
    //       "genres": [
    //         "Aksiyon"
    //       ],
    //       "is-igc-upsell": false,
    //       "is-multiplayer-upsell": false,
    //       "kamaji-relationship": "extras",
    //       "legal-text": "",
    //       "long-description": "BU DÜNYA SENİN İÇİN GELİYOR<br>Başıboş ve ganimet avcısı olan Deacon St. John’la ölümcül bir salgının mahvettiği bir kurtlar sofrasına doğru sür.<br><br>Sadık başıboş motorunla bozuk yoldaki tehlikelere karşı gelirken, aklını yitirmiş vahşi Kaçık sürüleri ve bir o kadar tehlikeli insanlarla yüzleş.<br><br>Tahmin edilmez hava koşulları ve günün farklı zamanları inanılmaz tehlikelere, şok edici sürprizlere ve ölmeni isteyen diğer her şeye gebe olabilir.<br><br>• Vahşi açık dünya: Pasifik Kuzeybatı’nın inanılmaz derecede gerçekçi, devasa ve düşmancıl bölgelerini keşfet.<br>• Sert ve açık uçlu çatışmalar: Silahlarını ve yeteneklerini özelleştirerek, tuzak üreterek ve motosikletini geliştirerek stratejilerini belirle.<br>• Sürükleyici hikâye: Derin ve kişisel bir kaybın ardından yaşama tutunacak bir sebep ararken, acımasız doğada hayatta kal.<br><br>HDTV ekran çözünürlüğü: 720p,1080i,1080p<br><br>Bu ürünün indirilmesi, PlayStation Network Hizmet Koşulları ve Yazılım Kullanım Koşulları ile bu ürün için geçerli olan belirli ek koşullara tabidir. Şartları kabul etmek istemiyorsanız bu ürünü indirmeyin. Diğer önemli bilgiler için bkz. Hizmet Koşulları.<br> Birden fazla PS4 sistemine indirmek için tek seferlik lisans ücreti. Bunu Ana PS4 Sisteminde kullanırken PlayStation Network'de oturum açmanız gerekmezken diğer PS4 sistemlerinde kullanırken oturum açma gereklidir.<br>Bu ürünü kullanmadan önce önemli sağlık bilgileri hakkında bilgi sahibi olmak için Sağlık Uyarıları kısmına bakın.<br />Sony Interactive Entertainment Inc. Yazılım Kütüphanesi  © kullanım hakları Sony Interactive Entertainment Europe kuruluşuna özel olarak lisanslanmıştır ve bu çerçevedeki yazılım kullanım haklarına tabidir. Lisans ve kullanım kurallarının tümüne eu.playstation.com/legal  adresinden ulaşabilirsiniz.",
    //       "macross-brain-context": "game",
    //       "media-list": {
    //         "preview": [],
    //         "promo": {
    //           "images": [],
    //           "videos": []
    //         },
    //         "screenshots": [
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENThfa7x5pXHJXAAzQI4CjZ/uPjRoKPB_Days Gone Screenshot 1.jpg"
    //           },
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENTJOf7SNrCc7VfrfxfiyaJ/rtTiYpTi_Days Gone Screenshot 2.jpg"
    //           },
    //           {
    //             "url": "https://apollo2.dl.playstation.net/cdn/EP9000/CUSA09175_00/FREE_CONTENTObkOxWI2vzS2ftXO94Cl/LcdvNXJC_Days Gone Screenshot 3.jpg"
    //           }
    //         ]
    //       },
    //       "name": "Days Gone™",
    //       "nsx-confirm-message": "",
    //       "parent": null,
    //       "platforms": [
    //         "PS4"
    //       ],
    //       "plus-reward-description": null,
    //       "primary-classification": "PREMIUM_GAME",
    //       "provider-name": "Sony Interactive Entertainment Europe",
    //       "ps-camera-compatibility": "incompatible",
    //       "ps-move-compatibility": "incompatible",
    //       "ps-vr-compatibility": "incompatible",
    //       "release-date": "2019-04-26T00:00:00Z",
    //       "secondary-classification": "GAME",
    //       "skus": [
    //         {
    //           "entitlements": [
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             },
    //             {
    //               "duration": 0,
    //               "exp-after-first-use": 0
    //             }
    //           ],
    //           "id": "EP9000-CUSA09175_00-DAYSGONECOMPLETE-E001",
    //           "is-preorder": false,
    //           "multibuy": null,
    //           "name": "Tam Oyun",
    //           "playability-date": "",
    //           "plus-reward-description": null,
    //           "prices": {
    //             "non-plus-user": {
    //               "actual-price": {
    //                 "display": "219,00 TL",
    //                 "value": 21900
    //               },
    //               "availability": {
    //                 "end-date": "2019-06-17T22:59:00Z",
    //                 "start-date": "2019-06-07T00:00:00Z"
    //               },
    //               "discount-percentage": 48,
    //               "is-plus": false,
    //               "strikethrough-price": {
    //                 "display": "429,00 TL",
    //                 "value": 42900
    //               },
    //               "upsell-price": {
    //                 "display": "197,55 TL",
    //                 "value": 19755
    //               }
    //             },
    //             "plus-user": {
    //               "actual-price": {
    //                 "display": "197,55 TL",
    //                 "value": 19755
    //               },
    //               "availability": {
    //                 "end-date": "2019-06-17T22:59:00Z",
    //                 "start-date": "2019-06-07T00:00:00Z"
    //               },
    //               "discount-percentage": 53,
    //               "is-plus": true,
    //               "strikethrough-price": {
    //                 "display": "429,00 TL",
    //                 "value": 42900
    //               },
    //               "upsell-price": null
    //             }
    //           }
    //         }
    //       ],
    //       "star-rating": {
    //         "score": 4.53,
    //         "total": 3699
    //       },
    //       "subtitle-language-codes": [
    //         {
    //           "codes": [
    //             "de",
    //             "no",
    //             "fi",
    //             "sv",
    //             "pt",
    //             "en",
    //             "it",
    //             "fr",
    //             "da",
    //             "es",
    //             "tr",
    //             "nl"
    //           ],
    //           "name": "DAYS GONE"
    //         }
    //       ],
    //       "tertiary-classification": "NA",
    //       "thumbnail-url-base": "https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/tr/19/EP9000-CUSA09175_00-DAYSGONECOMPLETE/1560236014000/image",
    //       "top-category": "downloadable_game",
    //       "upsell-info": {
    //         "discount-percentage-difference": 5,
    //         "display-price": "197,55 TL",
    //         "is-free": false,
    //         "type": "save-extra-percentage"
    //       },
    //       "voice-language-codes": [
    //         {
    //           "codes": [
    //             "de",
    //             "pt",
    //             "en",
    //             "it",
    //             "fr",
    //             "es"
    //           ],
    //           "name": "DAYS GONE"
    //         }
    //       ]
    //     },
    //     "id": "EP9000-CUSA09175_00-DAYSGONECOMPLETE",
    //     "relationships": {
    //       "children": {
    //         "data": [
    //           {
    //             "id": "EP9000-CUSA09175_00-00000DAYSGONEDLX",
    //             "type": "game"
    //           }
    //         ]
    //       },
    //       "legacy-skus": {
    //         "data": [
    //           {
    //             "id": "EP9000-CUSA09175_00-DAYSGONECOMPLETE-E001",
    //             "type": "legacy-sku"
    //           }
    //         ]
    //       }
    //     },
    //     "type": "game"
    //   },
    // ]), 1000));

    return searchResults;
}