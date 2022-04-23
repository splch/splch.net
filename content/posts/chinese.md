---
title: Chinese Word List
description: Top 100 Chinese words per part of speech
slug: chinese
date: 2022-04-06
categories:
tags:
  - Tools
draft: false
---

![中文 Flag](/images/chinese.webp)

## Dataset

I used the [SUBTLEX-CH frequency list](https://doi.org/10.1371/journal.pone.0010729) to list the top 100 Chinese words per part of speech.

There are 2,683 words on this page. From rough estimates, this should cover <abbr title="26303467 / 33546516">78</abbr>% of spoken Mandarin. The lists are sorted first by total counts of each part of speech, then by the word itself. For example, verbs are the most common words in Mandarin, and the most common verb is "是". So, the list begins with Verbs and its first entry is "是". The second piece of information is the pronunciation in English, called pinyin. After that is the English translation and finally the frequency of the word. This frequency is in scientific notation, so `950,000` is `9.5e5`.

If you'd like to view the entire list, download the [JSON](/data/中文.json) file. Its structure is:

```json
{
  "part of speech": {
    "word": frequency,
    ...
  },
  ...
}
```

## Pronunciation

![Modified from 10.1006/jpho.1996.0034](/images/tones.webp)

For english speakers, the romanized pronunciations of Mandarin Chinese are represented with pinyin. There are 5 tones in Mandarin Chinese, and the tones are represented with the following symbols:

1. ¯
2. ´
3. ˇ
4. `
5. &nbsp;

The fifth tone is slightly unique as it is just a shorter version of the first tone. This song is helpful in demonstrating the tones.

{{< youtube ORpsNpxmfOc >}}

---

## Word Lists

## Verb

| Character |  Pinyin  | Translation                                          | Count |
| :-------: | :------: | ---------------------------------------------------- | :---: |
|    是     |   shì    | am                                                   | 9.5e5 |
|    有     |   yǒu    | have                                                 | 2.9e5 |
|    会     |   huì    | will                                                 | 2.7e5 |
|    要     |   yào    | want                                                 | 2.4e5 |
|    说     |   shuō   | speak                                                | 2.3e5 |
|    想     |  xiǎng   | think                                                | 2.1e5 |
|   知道    |  zhīdào  | know                                                 | 2.0e5 |
|    来     |   lái    | come                                                 | 1.7e5 |
|    能     |   néng   | can                                                  | 1.7e5 |
|    去     |    qù    | go                                                   | 1.6e5 |
|    到     |   dào    | arrive                                               | 1.3e5 |
|    让     |   ràng   | allow                                                | 1.2e5 |
|    做     |   zuò    | do                                                   | 1.2e5 |
|    看     |   kàn    | see                                                  | 1.0e5 |
|   可以    |   kěyǐ   | can                                                  | 7.9e4 |
|   没有    | méi yǒu  | have not; no                                         | 7.5e4 |
|    没     |   méi    | don't                                                | 6.9e4 |
|    走     |   zǒu    | go; walk                                             | 6.5e4 |
|   告诉    |  gàosu   | tell                                                 | 6.1e4 |
|    听     |   tīng   | hear                                                 | 5.5e4 |
|   谢谢    |  xièxie  | thank you                                            | 5.1e4 |
|   觉得    |  juéde   | think                                                | 5.1e4 |
|    找     |   zhǎo   | look for; find                                       | 4.7e4 |
|   喜欢    |  xǐhuan  | like                                                 | 4.6e4 |
|   是的    |          |                                                      | 4.4e4 |
|    出     |   chū    | out                                                  | 4.3e4 |
|   需要    |  xūyào   | Need                                                 | 4.2e4 |
|    干     |   gān    | dry; do                                              | 4.2e4 |
|    死     |    sǐ    | die                                                  | 4.0e4 |
|    得     |    dé    | get; auxiliary verb; need; must; have to; be sure to | 4.0e4 |
|    可     |    kě    | can; may; approve; be worth; suit; but; yet          | 3.9e4 |
|    像     |          |                                                      | 3.9e4 |
|   可能    |  kěnéng  | Probably                                             | 3.8e4 |
|   应该    | yīnggāi  | Should                                               | 3.8e4 |
|   起来    |  qǐlái   | get up                                               | 3.7e4 |
|   还有    | hái yǒu  | also; in addition; besides                           | 3.6e4 |
|    上     |  shàng   | upper                                                | 3.4e4 |
|    叫     |          |                                                      | 3.3e4 |
|    拿     |    ná    | take                                                 | 3.2e4 |
|   开始    |  kāishǐ  | start                                                | 3.2e4 |
|    错     |   cuò    | wrong                                                | 3.1e4 |
|    打     |    dǎ    | strike; hit; break; fight; build; beat               | 3.1e4 |
|    带     |   dài    | belt                                                 | 3.1e4 |
|    请     |   qǐng   | please                                               | 3.1e4 |
|    帮     |   bāng   | help                                                 | 3.0e4 |
|    爱     |    ài    | love                                                 | 2.9e4 |
|    见     |   jiàn   | see; meet                                            | 2.9e4 |
|    吃     |   chī    | eat                                                  | 2.8e4 |
|    开     |   kāi    | open                                                 | 2.7e4 |
|   看到    | kàn dào  | see                                                  | 2.7e4 |
|    用     |   yòng   | use                                                  | 2.7e4 |
|    等     |          |                                                      | 2.6e4 |
|    下     |          |                                                      | 2.6e4 |
|   相信    | xiāngxìn | believe                                              | 2.6e4 |
|   认为    |  rènwéi  | think                                                | 2.5e4 |
|    该     |          |                                                      | 2.5e4 |
|   希望    |  xīwàng  | hope                                                 | 2.5e4 |
|   看看    |          |                                                      | 2.4e4 |
|   就是    | jiù shì  | precisely; exactly; just like                        | 2.4e4 |
|    回     |          |                                                      | 2.4e4 |
|   明白    | míngbai  | clear                                                | 2.4e4 |
|    杀     |   shā    | kill                                                 | 2.3e4 |
|    行     |   xíng   | That’s ok; That’s ok                                 | 2.2e4 |
|   回来    | huí lái  | come back; return                                    | 2.2e4 |
|   发生    | fāshēng  | Happen                                               | 2.2e4 |
|   找到    | zhǎo dào | find                                                 | 2.2e4 |
|    过     |   guò    | pass; cross; pass; spend; live                       | 2.1e4 |
|   准备    | zhǔnbèi  | Get ready                                            | 2.1e4 |
|   出来    | chū lái  | come                                                 | 2.1e4 |
|  对不起   | duìbuqǐ  | I’m sorry.                                           | 2.1e4 |
|    问     |   wèn    | ask                                                  | 2.0e4 |
|   离开    |  líkāi   | leave                                                | 2.0e4 |
|    住     |   zhù    | live                                                 | 2.0e4 |
|   发现    |  fāxiàn  | find                                                 | 2.0e4 |
|    放     |   fàng   | discharge                                            | 1.9e4 |
|    为     |   wèi    | by                                                   | 1.9e4 |
|    搞     |   gǎo    | get                                                  | 1.8e4 |
|    进     |   jìn    | enter                                                | 1.8e4 |
|   以为    |  yǐwéi   | Think                                                | 1.7e4 |
|    给     |   gěi    | give                                                 | 1.6e4 |
|   过来    | guò lái  | come; come over                                      | 1.6e4 |
|    掉     |   diào   | fall                                                 | 1.6e4 |
|    买     |   mǎi    | buy                                                  | 1.6e4 |
|    坐     |   zuò    | sit                                                  | 1.4e4 |
|    起     |    qǐ    | get up; start; rise                                  | 1.4e4 |
|   记得    |   jìdé   | remember                                             | 1.4e4 |
|    写     |   xiě    | write                                                | 1.4e4 |
|    穿     |  chuān   | wear                                                 | 1.4e4 |
|    弄     |   nòng   | get; make                                            | 1.4e4 |
|    算     |   suàn   | count; calculate                                     | 1.3e4 |
|   继续    |   jìxù   | Continue                                             | 1.3e4 |
|    送     |   sòng   | give                                                 | 1.3e4 |
|    玩     |          |                                                      | 1.3e4 |
|   担心    |  dānxīn  | Worry                                                | 1.3e4 |
|   认识    |  rènshi  | know                                                 | 1.3e4 |
|   下来    | xià lái  | come down; get down                                  | 1.3e4 |
|    跑     |   pǎo    | run                                                  | 1.2e4 |
|    成     |          |                                                      | 1.2e4 |
|    够     |   gòu    | enough                                               | 1.2e4 |
|    跟     |   gēn    | with                                                 | 1.2e4 |

## Pronoun

| Character |    Pinyin    | Translation                                         | Count |
| :-------: | :----------: | --------------------------------------------------- | :---: |
|    我     |      wǒ      | I                                                   | 1.7e6 |
|    你     |      nǐ      | you                                                 | 1.3e6 |
|    他     |      tā      | he                                                  | 4.0e5 |
|   我们    |    wǒmen     | We                                                  | 3.7e5 |
|    这     |     zhè      | Here (here)                                         | 2.9e5 |
|   什么    |    shénme    | What                                                | 2.4e5 |
|    她     |      tā      | she                                                 | 2.2e5 |
|    那     |              |                                                     | 1.7e5 |
|   他们    |    tā men    | they                                                | 1.4e5 |
|   你们    |    nǐ men    | you                                                 | 1.1e5 |
|   这个    |              |                                                     | 9.2e4 |
|   怎么    |    zěnme     | How                                                 | 8.9e4 |
|   这样    |   zhè yàng   | so; such; like this; this way                       | 6.4e4 |
|   自己    |     zìjǐ     | Own; self                                           | 5.8e4 |
|   这里    |    zhè lǐ    | here                                                | 5.4e4 |
|    谁     |     shéi     | who                                                 | 5.3e4 |
|  为什么   |  wèishénme   | Why                                                 | 5.1e4 |
|   这么    |    zhè me    | so; such; this way; like this                       | 4.9e4 |
|    它     |      tā      | it                                                  | 4.9e4 |
|   那个    |              |                                                     | 4.1e4 |
|   这些    |   zhè xiē    | these                                               | 3.7e4 |
|   那么    |    nà me     | like that; in that way                              | 2.6e4 |
|   那些    |    nà xiē    | those                                               | 2.6e4 |
|   这儿    |     zhèr     | here                                                | 2.5e4 |
|    哪     |      nǎ      | which; which                                        | 2.3e4 |
|   一切    |    yíqiè     | everything                                          | 2.2e4 |
|  怎么样   |  zěnmeyàng   | How about                                           | 2.1e4 |
|   那样    |   nà yàng    | that kind; like that; such                          | 1.7e4 |
|   大家    |    dàjiā     | everybody                                           | 1.7e4 |
|    您     |     nín      | you                                                 | 1.7e4 |
|   那里    |    nà lǐ     | there                                               | 1.7e4 |
|   任何    |    rènhé     | whatever; any                                       | 1.5e4 |
|   哪儿    |     nǎr      | where                                               | 1.5e4 |
|   这种    |              |                                                     | 1.5e4 |
|   其他    |     qítā     | Other                                               | 1.4e4 |
|   哪里    |    nǎ lǐ     | where                                               | 1.3e4 |
|   别人    |   bié·rén    | other people                                        | 1.2e4 |
|   如何    |     rúhé     | How                                                 | 1.1e4 |
|   那儿    |     nàr      | there                                               | 1.0e4 |
|    每     |     měi      | each                                                | 1.0e4 |
|   多少    |   duōshao    | how much                                            | 1.0e4 |
|   它们    |    tā men    | they                                                | 9.9e3 |
|   有人    |   yǒu rén    | someone; there’s someone                            | 9.9e3 |
|   怎样    |   zěn yàng   | how                                                 | 9.5e3 |
|    该     |              |                                                     | 9.3e3 |
|   她们    |    tā men    | they                                                | 8.9e3 |
|   有些    |              |                                                     | 8.9e3 |
|   每个    |              |                                                     | 8.7e3 |
|    另     |     lìng     | another; other; separately                          | 8.6e3 |
|   如此    |    rú cǐ     | so; such; in this way; like that                    | 8.3e3 |
|    此     |      cǐ      | this; these; now; here                              | 7.6e3 |
|  怎么办   |  zěn me bàn  | how to; what to do                                  | 6.8e3 |
|   那边    |   nà biān    | there                                               | 6.6e3 |
|   咱们    |    zánmen    | We                                                  | 6.5e3 |
|   别的    |    bié de    | other                                               | 6.2e3 |
|   这边    |   zhè biān   | here                                                | 4.7e3 |
|   其中    |   qízhōng    | among                                               | 4.6e3 |
|    啥     |              |                                                     | 4.4e3 |
|   每天    |              |                                                     | 4.1e3 |
|   那种    |              |                                                     | 4.0e3 |
|   各位    |    gè wèi    | everybody                                           | 4.0e3 |
|    本     |              |                                                     | 3.9e3 |
|  任何人   |              |                                                     | 3.7e3 |
|   多久    |   duō jiǔ    | how long                                            | 3.7e3 |
|   这次    |              |                                                     | 3.5e3 |
|   那时    |              |                                                     | 3.5e3 |
|   哪个    |              |                                                     | 3.1e3 |
|    其     |      qí      | his; her; its; their; he; she; it; they; such; that | 3.1e3 |
|  什么样   | shén me yàng | what kind                                           | 3.0e3 |
|   之一    |    zhī yī    | one of                                              | 2.9e3 |
|   另外    |   lìngwài    | in addition                                         | 2.9e3 |
|   某个    |              |                                                     | 2.6e3 |
|   为何    |    wèi hé    | why; for what reason                                | 2.6e3 |
|    某     |     mǒu      | some                                                | 2.5e3 |
|   那天    |              |                                                     | 2.5e3 |
|   其它    |              |                                                     | 2.2e3 |
|   某种    |              |                                                     | 2.1e3 |
|   之类    |   zhī lèi    | such as; and so on                                  | 2.1e3 |
|   自我    |    zì wǒ     | oneself; self                                       | 2.0e3 |
|   彼此    |     bǐcǐ     | each other                                          | 1.9e3 |
|   每次    |              |                                                     | 1.7e3 |
|   某些    |              |                                                     | 1.7e3 |
|    何     |              |                                                     | 1.5e3 |
|   有的    |    yǒu de    | some                                                | 1.4e3 |
|    各     |      gè      | various                                             | 1.4e3 |
|    怎     |              |                                                     | 1.3e3 |
|   我会    |              |                                                     | 1.2e3 |
|   某人    |              |                                                     | 1.2e3 |
|   各种    |   gè zhǒng   | all kinds; various; every kind                      | 9.0e2 |
|   何时    |              |                                                     | 8.6e2 |
|   每年    |              |                                                     | 8.6e2 |
|   他人    |              |                                                     | 8.4e2 |
|    咱     |     zán      | we; us                                              | 8.3e2 |
|   你家    |              |                                                     | 8.2e2 |
|  什么的   |              |                                                     | 8.1e2 |
|   每周    |              |                                                     | 8.0e2 |
|    自     |      zì      | from; since; self; oneself                          | 8.0e2 |
|   本地    |    běn dì    | this locality; local; native                        | 7.4e2 |
|   人家    |    rénjiā    | family                                              | 7.3e2 |
|   本人    |    běnrén    | oneself                                             | 7.0e2 |

## Common Noun

| Character |   Pinyin   | Translation                  | Count |
| :-------: | :--------: | ---------------------------- | :---: |
|    人     |    rén     | people                       | 1.9e5 |
|    事     |    shì     | thing                        | 9.8e4 |
|   时候    |   shíhou   | time                         | 5.2e4 |
|   先生    | xiānsheng  | Sir                          | 4.7e4 |
|    话     |    huà     | word; words                  | 4.0e4 |
|   东西    |   dōngxi   | thing                        | 3.8e4 |
|   孩子    |   háizi    | Children                     | 3.7e4 |
|   问题    |   wèntí    | problem                      | 3.3e4 |
|   时间    |  shíjiān   | time                         | 3.1e4 |
|    钱     |    qián    | money                        | 2.9e4 |
|   事情    |  shìqing   | Thing                        | 2.8e4 |
|   朋友    |  péngyou   | Friend                       | 2.6e4 |
|   妈妈    |            |                              | 2.6e4 |
|    车     |    chē     | car                          | 2.4e4 |
|   地方    |   dìfang   | local; local                 | 2.3e4 |
|   爸爸    |            |                              | 2.2e4 |
|    点     |    diǎn    | spot                         | 2.2e4 |
|   意思    |    yìsi    | Meaning                      | 1.9e4 |
|   电话    |  diàn huà  | phone                        | 1.8e4 |
|    妈     |            |                              | 1.8e4 |
|    家     |    jiā     | home                         | 1.8e4 |
|   医生    |  yīshēng   | Doctor                       | 1.6e4 |
|   伙计    |            |                              | 1.5e4 |
|    手     |    shǒu    | hand                         | 1.5e4 |
|   感觉    |   gǎnjué   | feel                         | 1.5e4 |
|   上帝    |  shàng dì  | God                          | 1.5e4 |
|   女人    |   nǚ ren   | woman                        | 1.4e4 |
|   名字    |   míngzi   | Name                         | 1.4e4 |
|   家伙    |            |                              | 1.4e4 |
|   女孩    |            |                              | 1.3e4 |
|   父亲    |   fùqīn    | father                       | 1.2e4 |
|   宝贝    |   bǎobèi   | baby                         | 1.2e4 |
|    狗     |    gǒu     | Dog                          | 1.2e4 |
|    枪     |   qiāng    | gun                          | 1.2e4 |
|   世界    |   shìjiè   | world                        | 1.2e4 |
|   男人    |  nán ren   | man                          | 1.2e4 |
|   机会    |   jīhuì    | Opportunity                  | 1.2e4 |
|   小时    |  xiǎoshí   | hour                         | 1.1e4 |
|    天     |    tiān    | day                          | 1.1e4 |
|   警察    |  jǐngchá   | Police                       | 1.1e4 |
|   儿子    |    érzi    | Son                          | 1.1e4 |
|   情况    | qíngkuàng  | Situation                    | 1.1e4 |
|   女士    |   nǚshì    | Ma’am                        | 1.1e4 |
|   关系    |   guānxì   | relationship                 | 1.0e4 |
|   公司    |   gōngsī   | company                      | 1.0e4 |
|    月     |    yuè     | month                        | 9.5e3 |
|    爸     |            |                              | 9.2e3 |
|    心     |    xīn     | heart; feeling; centre; core | 9.0e3 |
|   照片    |  zhàopiàn  | Photo                        | 8.7e3 |
|    头     |            |                              | 8.7e3 |
|   兄弟    |  xiōngdì   | Brother                      | 8.6e3 |
|    嘴     |    zuǐ     | mouth                        | 8.5e3 |
|   计划    |   jìhuà    | plan                         | 8.5e3 |
|   女儿    |   nǚ’ér    | daughter                     | 8.4e3 |
|   小姐    |  xiǎojiě   | Miss                         | 8.4e3 |
|   消息    |   xiāoxi   | message                      | 8.3e3 |
|    门     |    mén     | door                         | 8.3e3 |
|   房子    |  fáng zi   | house; building              | 8.2e3 |
|   衣服    |    yīfu    | clothes                      | 8.1e3 |
|   办法    |   bànfǎ    | Way                          | 8.1e3 |
|   人们    |  rén men   | people                       | 8.0e3 |
|   原因    |  yuányīn   | Reason                       | 7.8e3 |
|    水     |    shuǐ    | water                        | 7.6e3 |
|   混蛋    |            |                              | 7.6e3 |
|   学校    |  xuéxiào   | School                       | 7.5e3 |
|    队     |    duì     | team                         | 7.4e3 |
|   电影    |  diànyǐng  | Film                         | 7.2e3 |
|   房间    |  fángjiān  | Room                         | 7.2e3 |
|    球     |    qiú     | ball                         | 7.1e3 |
|    书     |    shū     | book                         | 7.1e3 |
|    路     |     lù     | road                         | 6.9e3 |
|   结果    |   jiéguǒ   | Result                       | 6.9e3 |
|   长官    |            |                              | 6.8e3 |
|   律师    |   lǜshī    | Lawyer                       | 6.7e3 |
|   故事    |   gùshi    | Story                        | 6.6e3 |
|   可能    |   kěnéng   | Probably                     | 6.5e3 |
|   妻子    |    qīzi    | Wife                         | 6.5e3 |
|    床     |   chuáng   | bed                          | 6.5e3 |
|   案子    |            |                              | 6.4e3 |
|    酒     |    jiǔ     | alcohol; liqueur             | 6.3e3 |
|    歌     |     gē     | song                         | 6.3e3 |
|   节目    |   jiémù    | program                      | 6.3e3 |
|   母亲    |   mǔqīn    | mother                       | 6.2e3 |
|   主意    |   zhǔyi    | idea                         | 6.1e3 |
|   丈夫    |  zhàngfu   | husband                      | 6.1e3 |
|    马     |     mǎ     | Horse                        | 6.0e3 |
|   生命    | shēngmìng  | life                         | 5.9e3 |
|  办公室   | bàngōngshì | Office                       | 5.9e3 |
|   游戏    |   yóuxì    | Game                         | 5.7e3 |
|   眼睛    |  yǎnjing   | Eye                          | 5.7e3 |
|   国家    |   guójiā   | Country                      | 5.6e3 |
|    信     |            |                              | 5.6e3 |
|   总统    |  zǒngtǒng  | President                    | 5.5e3 |
|   声音    |  shēngyīn  | voice                        | 5.5e3 |
|   医院    |   yīyuàn   | Hospital                     | 5.4e3 |
|   样子    |   yàngzi   | A look                       | 5.3e3 |
|   证据    |  zhèngjù   | evidence                     | 5.1e3 |
|   夫人    |   fūrén    | Madam                        | 5.1e3 |
|   父母    |   fù mǔ    | father and mother; parents   | 5.1e3 |
|   事实    |   shìshí   | Fact                         | 5.0e3 |

## Adverb

| Character |    Pinyin    | Translation                                | Count |
| :-------: | :----------: | ------------------------------------------ | :---: |
|    不     |      bù      | No                                         | 6.9e5 |
|    就     |     jiù      | as soon as; right away; then               | 2.6e5 |
|    很     |     hěn      | very                                       | 2.0e5 |
|    都     |     dōu      | all                                        | 1.8e5 |
|    也     |      yě      | also                                       | 1.3e5 |
|    还     |     hái      | also; still; yet; return; pay back         | 1.3e5 |
|    没     |     méi      | no                                         | 9.0e4 |
|    别     |              |                                            | 6.8e4 |
|    太     |     tài      | too                                        | 6.5e4 |
|    只     |     zhǐ      | only; just; simply; merely; single; lonely | 6.4e4 |
|    再     |     zài      | again                                      | 5.7e4 |
|    真     |     zhēn     | really                                     | 5.5e4 |
|   已经    |    yǐjīng    | Already                                    | 5.2e4 |
|    最     |     zuì      | most                                       | 4.6e4 |
|    又     |     yòu      | also                                       | 3.4e4 |
|   没有    |   méi yǒu    | have not; no                               | 3.4e4 |
|    才     |              |                                            | 3.3e4 |
|    更     |     gèng     | more                                       | 3.2e4 |
|   非常    |   fēicháng   | very                                       | 2.7e4 |
|   当然    |   dāngrán    | Of course                                  | 2.6e4 |
|   也许    |     yěxǔ     | perhaps                                    | 2.6e4 |
|   一直    |    yìzhí     | always                                     | 2.5e4 |
|   不要    |    bú yào    | don’t                                      | 2.1e4 |
|   一定    |    yídìng    | Certain                                    | 2.0e4 |
|    将     |    jiāng     | be going to; will; would                   | 2.0e4 |
|   必须    |     bìxū     | Must                                       | 1.9e4 |
|    正     |              |                                            | 1.9e4 |
|    快     |     kuài     | fast                                       | 1.9e4 |
|   只是    |   zhǐ shì    | merely; only; just                         | 1.9e4 |
|    先     |     xiān     | before                                     | 1.6e4 |
|    并     |              |                                            | 1.4e4 |
|    却     |     què      | but                                        | 1.3e4 |
|   肯定    |   kěndìng    | sure                                       | 1.1e4 |
|    刚     |     gāng     | just                                       | 1.1e4 |
|   真是    |              |                                            | 1.1e4 |
|   马上    |   mǎshàng    | Right off                                  | 1.0e4 |
|   永远    |   yǒngyuǎn   | forever                                    | 9.8e3 |
|   到底    |    dàodǐ     | To the end                                 | 9.6e3 |
|   一起    |     yìqǐ     | together                                   | 9.5e3 |
|    总     |     zǒng     | always; consistently                       | 8.8e3 |
|   从来    |   cónglái    | Always                                     | 8.6e3 |
|   总是    |   zǒngshì    | always                                     | 8.6e3 |
|   或许    |    huòxǔ     | maybe; probably                            | 8.3e3 |
|   根本    |    gēnběn    | at all                                     | 8.2e3 |
|   还是    |    háishi    | still                                      | 7.6e3 |
|   好好    |   hǎo hǎo    | really good; really nice                   | 7.5e3 |
|    挺     |              |                                            | 7.3e3 |
|   其实    |    qíshí     | actually                                   | 7.1e3 |
|   至少    |   zhìshǎo    | at least                                   | 6.8e3 |
|   正在    |   zhèngzài   | in process of                              | 6.7e3 |
|    已     |      yǐ      | already; afterwards                        | 6.6e3 |
|   刚刚    |  gāng gāng   | just; only; just a moment ago              | 6.4e3 |
|   绝对    |    juéduì    | Absolutely                                 | 6.2e3 |
|   有点    |              |                                            | 5.9e3 |
|   难道    |    nándào    | could it be said that …                    | 5.9e3 |
|   曾经    |   céngjīng   | once                                       | 5.7e3 |
|    一     |      yī      | One                                        | 5.7e3 |
|   真的    |   zhēn de    | really                                     | 5.2e3 |
|    曾     |     céng     | once; already; at some time in the past    | 5.0e3 |
|    过     |     guò      | pass; cross; pass; spend; live             | 4.9e3 |
|   简直    |   jiǎnzhí    | simply                                     | 4.8e3 |
|   的确    |    díquè     | indeed; be certain to                      | 4.8e3 |
|   特别    |    tèbié     | Especially                                 | 4.7e3 |
|    全     |     quán     | whole; entire; complete                    | 4.6e3 |
|   重新    |   chóngxīn   | again                                      | 4.6e3 |
|   大概    |    dàgài     | Probably                                   | 4.6e3 |
|   甚至    |   shènzhì    | Even to the extent that                    | 4.5e3 |
|  实际上   | shí jì shàng | actually                                   | 4.4e3 |
|   本来    |    běnlái    | originally                                 | 4.4e3 |
|    越     |     yuè      | The more                                   | 4.3e3 |
|   终于    |   zhōngyú    | finally                                    | 4.3e3 |
|   不再    |    bú zài    | no longer; no more                         | 4.2e3 |
|   就是    |   jiù shì    | precisely; exactly; just like              | 4.0e3 |
|   从没    |   cóng méi   | never; never did                           | 3.9e3 |
|   不用    |   bú yòng    | No need to                                 | 3.9e3 |
|   很快    |              |                                            | 3.8e3 |
|   到处    |    dàochù    | everywhere                                 | 3.5e3 |
|   经常    |  jīngcháng   | Often                                      | 3.3e3 |
|   实在    |    shízài    | real; indeeed; done carefully              | 3.3e3 |
|   比较    |    bǐjiào    | compare                                    | 3.3e3 |
|   似乎    |     sìhū     | It seems that                              | 3.2e3 |
|   还要    |              |                                            | 3.1e3 |
|    倒     |     dǎo      | fall; topple; fail; inverted               | 3.0e3 |
|   多么    |    duōme     | what                                       | 2.9e3 |
|   仍然    |   réngrán    | still                                      | 2.9e3 |
|   居然    |    jūrán     | actually                                   | 2.9e3 |
|   就要    |   jiù yào    | be going to; be about to                   | 2.9e3 |
|   几乎    |     jīhū     | almost                                     | 2.8e3 |
|   再次    |    zài cì    | once more; once again; one more time       | 2.8e3 |
|  不得不   |    bùdébù    | Cannot but                                 | 2.8e3 |
|    大     |      dà      | large; big                                 | 2.7e3 |
|    约     |     yuē      | appointment; agreement; arrange; restrict  | 2.7e3 |
|    乱     |     luàn     | chaos                                      | 2.7e3 |
|   真正    |  zhēnzhèng   | real                                       | 2.6e3 |
|   有时    |              |                                            | 2.6e3 |
|   反正    |   fǎnzhèng   | anyway                                     | 2.6e3 |
|    未     |              |                                            | 2.5e3 |
|    本     |              |                                            | 2.5e3 |
|   不必    |    bú bì     | need not; not have to                      | 2.5e3 |
|  有时候   |              |                                            | 2.4e3 |

## Auxiliary

| Character | Pinyin  | Translation                                           | Count |
| :-------: | :-----: | ----------------------------------------------------- | :---: |
|    的     |   de    | (aux.)                                                | 1.7e6 |
|    了     |   le    | past tense marker; past tense marker                  | 2.9e5 |
|    着     |   zhe   | in process of; in process of                          | 9.9e4 |
|    过     |   guò   | pass; cross; pass; spend; live                        | 8.6e4 |
|    得     |   dé    | get; auxiliary verb; need; must; have to; be sure to  | 6.5e4 |
|   一样    | yíyàng  | equally                                               | 2.1e4 |
|    所     |         |                                                       | 1.8e4 |
|    之     |         |                                                       | 1.5e4 |
|    地     |   de    | auxiliary word; ground                                | 1.5e4 |
|    等     |         |                                                       | 7.7e3 |
|    连     |  lián   | even                                                  | 6.2e3 |
|   来说    |         |                                                       | 6.0e3 |
|   等等    |         |                                                       | 5.2e3 |
|   似的    |  shìde  | Like                                                  | 1.8e3 |
|   为止    | wéi zhǐ | up to; till                                           | 1.7e3 |
|    来     |   lái   | come                                                  | 1.6e3 |
|    般     |         |                                                       | 1.5e3 |
|   的话    | de huà  | if                                                    | 1.1e3 |
|   而言    |         |                                                       | 9.6e2 |
|   不过    |  búguò  | However                                               | 8.2e2 |
|   极了    |  jí le  | extremely; exceedingly                                | 6.6e2 |
|   一般    |  yìbān  | commonly                                              | 6.6e2 |
|    样     |  yàng   | appearance; shape; sample; model; pattern; kind; type | 2.3e2 |
|   与否    |         |                                                       | 2.2e2 |
|    给     |   gěi   | give                                                  | 2.0e2 |
|   起见    |         |                                                       | 2.0e2 |
|   在内    | zài nèi | including; inside; internally                         | 1.5e2 |
|   来讲    |         |                                                       | 8.7e1 |
|   来看    |         |                                                       | 4.9e1 |
|   来着    |         |                                                       | 3.1e1 |
|   而已    |         |                                                       | 3.0e1 |
|   可言    |         |                                                       | 2.8e1 |
|   说来    |         |                                                       | 2.7e1 |
|    似     |         |                                                       | 1.8e1 |
|    乎     |         |                                                       | 1.6e1 |
|   而外    |         |                                                       | 1.5e1 |
|   开外    |         |                                                       | 1.1e1 |
|    其     |   qí    | his; her; its; their; he; she; it; they; such; that   | 5.0e0 |
|   热心    |  rèxīn  | enthusiastic                                          | 5.0e0 |
|    也     |   yě    | also                                                  | 4.0e0 |
|  一个样   |         |                                                       | 3.0e0 |
|    看     |   kàn   | see; see                                              | 3.0e0 |
|    者     |         |                                                       | 2.0e0 |
|   云云    |         |                                                       | 1.0e0 |
|    而     |   ér    | and                                                   | 1.0e0 |

## Modal Particle

| Character |  Pinyin  | Translation                               | Count |
| :-------: | :------: | ----------------------------------------- | :---: |
|    了     |    le    | past tense marker; past tense marker      | 6.5e5 |
|    吗     |    ma    | auxiliary word                            | 2.5e5 |
|    吧     |    ba    | (interjection particle)                   | 1.9e5 |
|    啊     |    a     | auxiliary word; ah                        | 1.3e5 |
|    呢     |    ne    | auxiliary word                            | 7.7e4 |
|    么     |          |                                           | 3.9e4 |
|    呃     |          |                                           | 2.3e4 |
|    嘛     |    ma    | (auxiliary word)                          | 1.6e4 |
|    噢     |          |                                           | 1.6e4 |
|    啦     |    la    | auxiliary word                            | 1.3e4 |
|    呀     |    ya    | ah                                        | 1.1e4 |
|    哇     |    wa    | wow                                       | 7.4e3 |
|   而已    |          |                                           | 5.4e3 |
|   极了    |  jí le   | extremely; exceedingly                    | 5.1e3 |
|    耶     |          |                                           | 3.9e3 |
|    哪     |    nǎ    | which; which                              | 2.9e3 |
|    唔     |          |                                           | 1.9e3 |
|    呐     |          |                                           | 1.6e3 |
|   罢了    |  bà le   | let it pass; that’s all; (auxiliary word) | 1.4e3 |
|    咯     |          |                                           | 1.3e3 |
|    尔     |          |                                           | 9.3e2 |
|    喽     |          |                                           | 7.6e2 |
|    哟     |          |                                           | 7.0e2 |
|    来     |   lái    | come                                      | 6.2e2 |
|    兮     |          |                                           | 6.0e2 |
|   来着    |          |                                           | 5.7e2 |
|   着呢    |          |                                           | 5.3e2 |
|    呗     |          |                                           | 3.3e2 |
|    哩     |          |                                           | 3.3e2 |
|    者     |          |                                           | 2.8e2 |
|   也好    |  yě hǎo  | may as well; no matter whether            | 2.8e2 |
|    呵     |          |                                           | 2.5e2 |
|  就是了   |          |                                           | 1.8e2 |
|    耳     |          |                                           | 1.3e2 |
|    乎     |          |                                           | 1.2e2 |
|    咧     |          |                                           | 1.0e2 |
|    呕     |          |                                           | 1.0e2 |
|    也     |    yě    | also                                      | 8.8e1 |
|    啵     |          |                                           | 7.3e1 |
|    夫     |          |                                           | 5.8e1 |
|   也罢    |          |                                           | 5.7e1 |
|    嘞     |          |                                           | 5.5e1 |
|    否     |          |                                           | 5.2e1 |
|    哉     |          |                                           | 5.0e1 |
|    矣     |          |                                           | 4.2e1 |
|   不成    | bù chéng | won’t do; fail                            | 1.8e1 |
|    焉     |          |                                           | 1.3e1 |
|    罢     |          |                                           | 1.3e1 |
|   便了    |          |                                           | 6.0e0 |
|   则已    |          |                                           | 3.0e0 |
|    邪     |          |                                           | 2.0e0 |
|   得了    |  dé le   | stop it; hold it; got                     | 1.0e0 |
|    煞     |          |                                           | 1.0e0 |
|   着哪    |          |                                           | 1.0e0 |

## Adjective

| Character |   Pinyin   | Translation                         | Count |
| :-------: | :--------: | ----------------------------------- | :---: |
|    好     |    hǎo     | good                                | 3.3e5 |
|    真     |    zhēn    | really                              | 4.7e4 |
|    大     |     dà     | large; big                          | 4.2e4 |
|    小     |    xiǎo    | Small                               | 3.5e4 |
|    快     |    kuài    | fast                                | 3.5e4 |
|    多     |    duō     | many; much; more                    | 2.7e4 |
|   不错    |   bú cuò   | not bad; pretty good                | 1.9e4 |
|   抱歉    |  bàoqiàn   | feel sorry                          | 1.7e4 |
|    新     |    xīn     | new                                 | 1.7e4 |
|   高兴    |  gāoxìng   | happy                               | 1.6e4 |
|    棒     |    bàng    | stick；excellent                    | 1.6e4 |
|    老     |            |                                     | 1.6e4 |
|   亲爱    |   qīn’ài   | Dear                                | 1.3e4 |
|   重要    |  zhòngyào  | important                           | 1.2e4 |
|   漂亮    | piàoliang  | Well done!； beautiful              | 1.1e4 |
|    长     |   cháng    | long; grow                          | 9.5e3 |
|   清楚    |  qīngchu   | clear                               | 8.6e3 |
|   一样    |   yíyàng   | equally                             | 8.0e3 |
|    坏     |    huài    | bad                                 | 7.6e3 |
|    高     |    gāo     | high                                | 7.1e3 |
|   开心    |   kāixīn   | Happy                               | 6.2e3 |
|   可爱    |   kě’ài    | Lovely                              | 5.5e3 |
|   不行    |  bù xíng   | no way; be out of the question      | 5.4e3 |
|    糟     |    zāo     | dregs; waste; spoil; bad; in a mess | 5.3e3 |
|   有趣    |   yǒuqù    | interesting                         | 5.3e3 |
|    久     |    jiǔ     | long                                | 5.2e3 |
|   糟糕    |   zāogāo   | terrible                            | 5.2e3 |
|   不同    |  bù tóng   | different                           | 5.1e3 |
|    难     |    nán     | hard; difficult                     | 4.9e3 |
|   简单    |  jiǎndān   | simple                              | 4.9e3 |
|   紧张    |  jǐnzhāng  | Nervous                             | 4.8e3 |
|    远     |    yuǎn    | far                                 | 4.7e3 |
|   成功    | chénggōng  | Success                             | 4.6e3 |
|    黑     |    hēi     | black                               | 4.5e3 |
|    甜     |    tián    | sweet                               | 4.4e3 |
|   聪明    |  cōngming  | clever                              | 4.4e3 |
|   疯狂    | fēngkuáng  | Insane                              | 4.4e3 |
|    早     |    zǎo     | early                               | 4.4e3 |
|   不好    |            |                                     | 4.3e3 |
|   正常    | zhèngcháng | normal                              | 4.1e3 |
|   完美    |   wánměi   | perfect                             | 4.0e3 |
|    傻     |    shǎ     | silly                               | 4.0e3 |
|   小心    |  xiǎoxīn   | Look out                            | 3.9e3 |
|   年轻    |  niánqīng  | Young                               | 3.8e3 |
|   容易    |   róngyì   | easily                              | 3.6e3 |
|    强     |   qiáng    | strong; powerful; better            | 3.5e3 |
|   幸运    |  xìngyùn   | Lucky                               | 3.5e3 |
|   危险    |  wēixiǎn   | danger                              | 3.4e3 |
|   可怕    |    kěpà    | dreadful                            | 3.3e3 |
|    死     |     sǐ     | die                                 | 3.3e3 |
|   必要    |   bìyào    | necessary                           | 3.2e3 |
|    假     |    jiǎ     | FALSE                               | 3.1e3 |
|   冷静    |  lěngjìng  | calm down                           | 3.1e3 |
|   正确    |  zhèngquè  | Correct                             | 3.1e3 |
|    全     |    quán    | whole; entire; complete             | 3.1e3 |
|    忙     |    máng    | busy                                | 3.0e3 |
|   安静    |   ānjìng   | Be quiet                            | 3.0e3 |
|   恐怖    |            |                                     | 2.9e3 |
|   快乐    |   kuàilè   | happy                               | 2.9e3 |
|    红     |    hóng    | red                                 | 2.9e3 |
|   明显    |  míngxiǎn  | obvious                             | 2.9e3 |
|    少     |    shǎo    | less                                | 2.8e3 |
|   恶心    |    ěxin    | disgusting                          | 2.8e3 |
|   出色    |   chūsè    | excellent; outstanding              | 2.8e3 |
|   真实    |  zhēnshí   | real                                | 2.7e3 |
|   严重    |  yánzhòng  | serious                             | 2.7e3 |
|    差     |    chà     | differ from; bad; short of          | 2.7e3 |
|    慢     |    màn     | slow                                | 2.7e3 |
|    美     |    měi     | beautiful; pretty                   | 2.6e3 |
|   自由    |   zìyóu    | free                                | 2.6e3 |
|    晚     |    wǎn     | late                                | 2.6e3 |
|   舒服    |   shūfu    | comfortable                         | 2.6e3 |
|    热     |     rè     | heat                                | 2.6e3 |
|    蠢     |            |                                     | 2.5e3 |
|   伟大    |   wěidà    | great                               | 2.5e3 |
|   美丽    |   měilì    | beautiful                           | 2.5e3 |
|    臭     |    chòu    | smelly                              | 2.5e3 |
|   厉害    |   lìhai    | Fierce                              | 2.5e3 |
|   特别    |   tèbié    | Especially                          | 2.5e3 |
|   精彩    |  jīngcǎi   | Marvellous                          | 2.5e3 |
|   失望    |  shīwàng   | Disappointment                      | 2.4e3 |
|   愉快    |   yúkuài   | Cheerful                            | 2.4e3 |
|   合适    |   héshì    | appropriate                         | 2.4e3 |
|   麻烦    |   máfan    | trouble                             | 2.4e3 |
|    近     |    jìn     | near                                | 2.3e3 |
|   显然    |  xiǎnrán   | Obviously                           | 2.3e3 |
|    短     |    duǎn    | short                               | 2.3e3 |
|   认真    |  rènzhēn   | earnest                             | 2.3e3 |
|    冷     |    lěng    | cold                                | 2.3e3 |
|   愚蠢    |            |                                     | 2.3e3 |
|   客气    |   kè qì    | polite; courteous; modest           | 2.2e3 |
|   美好    |  měi hǎo   | fine; happy; glorious               | 2.2e3 |
|   公平    |  gōngpíng  | fair                                | 2.2e3 |
|    重     |   zhòng    | heavy; heavy                        | 2.2e3 |
|   干净    |  gānjìng   | clean                               | 2.2e3 |
|   遗憾    |   yíhàn    | regret; pity                        | 2.2e3 |
|   不够    |   bú gòu   | not enough                          | 2.2e3 |
|    满     |    mǎn     | full                                | 2.1e3 |
|    烂     |    làn     | rotten                              | 2.1e3 |
|   激动    |   jīdòng   | Excited                             | 2.1e3 |

## Preposition

| Character |  Pinyin   | Translation                                               | Count |
| :-------: | :-------: | --------------------------------------------------------- | :---: |
|    在     |    zài    | stay; in process of                                       | 4.3e5 |
|    对     |           |                                                           | 1.3e5 |
|    把     |           |                                                           | 1.2e5 |
|    给     |    gěi    | give                                                      | 1.0e5 |
|    被     |    bèi    | cover                                                     | 6.6e4 |
|    跟     |    gēn    | with                                                      | 5.1e4 |
|   因为    |  yīn wèi  | because                                                   | 4.9e4 |
|    从     |   cóng    | from                                                      | 4.7e4 |
|    为     |    wèi    | by                                                        | 2.7e4 |
|    用     |   yòng    | use                                                       | 2.6e4 |
|    当     |   dāng    | When; When                                                | 2.4e4 |
|    比     |    bǐ     | particle used for comparison                              | 2.0e4 |
|   为了    |   wèile   | in order to                                               | 1.8e4 |
|    向     |   xiàng   | towards                                                   | 1.7e4 |
|    以     |           |                                                           | 1.3e4 |
|    就     |    jiù    | as soon as; right away; then                              | 1.2e4 |
|    像     |           |                                                           | 1.1e4 |
|    与     |    yǔ     | and                                                       | 1.1e4 |
|    和     |    hé     | and                                                       | 1.0e4 |
|   关于    |  guānyú   | about                                                     | 1.0e4 |
|    于     |    yú     | (preposition)                                             | 8.7e3 |
|    到     |    dào    | reach                                                     | 6.2e3 |
|    往     |   wǎng    | to                                                        | 5.9e3 |
|    由     |    yóu    | from                                                      | 5.8e3 |
|    将     |   jiāng   | be going to; will; would                                  | 5.3e3 |
|    同     |   tóng    | same; similar; alike; like; together                      | 5.3e3 |
|   除了    |   chúle   | except                                                    | 5.1e3 |
|   对于    |   duìyú   | about                                                     | 4.4e3 |
|   通过    |  tōngguò  | adopt                                                     | 4.4e3 |
|   作为    |  zuòwéi   | As                                                        | 4.1e3 |
|    替     |    tì     | replace; substitute; take the place of; for; on behalf of | 3.9e3 |
|    按     |    àn     | press; push; check; restrain                              | 3.7e3 |
|   根据    |   gēnjù   | according to                                              | 2.7e3 |
|    因     |    yīn    | cause; reason; because                                    | 2.7e3 |
|    自     |    zì     | from; since; self; oneself                                | 2.7e3 |
|   自从    |  zìcóng   | Since                                                     | 2.5e3 |
|   经过    |  jīngguò  | after; through                                            | 1.9e3 |
|    朝     |   cháo    | towards                                                   | 1.7e3 |
|    靠     |    kào    | lean                                                      | 1.5e3 |
|    离     |    lí     | leave                                                     | 1.5e3 |
|    至     |    zhì    | to; till; until; extremely                                | 1.5e3 |
|    随     |    suí    | follow; comply with; adapt                                | 1.5e3 |
|    据     |    jù     | according to; seize; depend on; evidence                  | 1.4e3 |
|    叫     |           |                                                           | 1.4e3 |
|    凭     |   píng    | By                                                        | 1.3e3 |
|   按照    |  ànzhào   | according to                                              | 1.2e3 |
|    经     |           |                                                           | 1.0e3 |
|   由于    |   yóuyú   | Because                                                   | 9.3e2 |
|   针对    |  zhēnduì  | In the light of                                           | 9.0e2 |
|    趁     |           |                                                           | 7.5e2 |
|   至于    |   zhìyú   | As for                                                    | 7.4e2 |
|    照     |   zhào    | reflect                                                   | 7.2e2 |
|   随着    |  suízhe   | along with                                                | 7.1e2 |
|    除     |    chú    | except                                                    | 5.6e2 |
|   有关    | yǒu guān  | related; concerning; relate; concern                      | 5.1e2 |
|   沿着    |  yán zhe  | along                                                     | 5.0e2 |
|   基于    |           |                                                           | 4.9e2 |
|   每当    |           |                                                           | 4.0e2 |
|   鉴于    |           |                                                           | 3.8e2 |
|   顺着    |           |                                                           | 2.8e2 |
|   照着    |           |                                                           | 2.4e2 |
|   朝着    |           |                                                           | 2.3e2 |
|    依     |           |                                                           | 2.3e2 |
|    沿     |    yán    | along; follow                                             | 1.8e2 |
|    距     |           |                                                           | 1.7e2 |
|    乘     |   chéng   | ride                                                      | 1.6e2 |
|   距离    |   jùlí    | distance                                                  | 1.6e2 |
|    借     |    jiè    | borrow                                                    | 1.3e2 |
|   正当    | zhèngdāng | proper                                                    | 1.1e2 |
|   当着    |           |                                                           | 1.0e2 |
|   依照    |  yī zhào  | according to; in the light of:                            | 9.8e1 |
|   凭借    |           |                                                           | 9.7e1 |
|   趁着    |           |                                                           | 8.9e1 |
|   凭着    |           |                                                           | 8.8e1 |
|    待     |    dāi    | stay                                                      | 7.6e1 |
|   向着    |           |                                                           | 7.1e1 |
|   连同    |           |                                                           | 6.9e1 |
|   依据    |   yījù    | Basis                                                     | 6.4e1 |
|   自打    |           |                                                           | 4.6e1 |
|   乘着    |           |                                                           | 4.5e1 |
|   经由    |           |                                                           | 3.5e1 |
|   遵照    |           |                                                           | 1.7e1 |
|   本着    |           |                                                           | 1.6e1 |
|   不比    |           |                                                           | 9.0e0 |
|    缘     |           |                                                           | 8.0e0 |
|   缘于    |           |                                                           | 7.0e0 |
|   为着    |           |                                                           | 6.0e0 |
|    乎     |           |                                                           | 6.0e0 |
|    较     |   jiào    | compare; comparatively; relatively; fairly; quite; rather | 6.0e0 |
|   较之    |           |                                                           | 2.0e0 |
|   及至    |           |                                                           | 1.0e0 |
|   因着    |           |                                                           | 1.0e0 |

## Conjunction

| Character |      Pinyin       | Translation                                 | Count |
| :-------: | :---------------: | ------------------------------------------- | :---: |
|   如果    |       rúguǒ       | If                                          | 7.6e4 |
|    但     |        dàn        | but; however                                | 6.8e4 |
|   但是    |      dàn shì      | but; however                                | 5.3e4 |
|   所以    |      suǒ yǐ       | so                                          | 3.7e4 |
|   然后    |      ránhòu       | Then                                        | 3.0e4 |
|    那     |                   |                                             | 2.2e4 |
|   不过    |       búguò       | However                                     | 2.1e4 |
|   而且    |      ér qiě       | and                                         | 1.9e4 |
|   那么    |       nà me       | like that; in that way                      | 1.5e4 |
|   或者    |      huòzhě       | perhaps                                     | 1.4e4 |
|   可是    |       kěshì       | however                                     | 1.1e4 |
|   因为    |      yīn wèi      | because                                     | 1.1e4 |
|   只要    |      zhǐyào       | as long as                                  | 1.0e4 |
|   还是    |      háishi       | still                                       | 8.6e3 |
|   不管    |      bùguǎn       | no matter                                   | 6.9e3 |
|    或     |        huò        | or                                          | 6.9e3 |
|   只有    |      zhǐ yǒu      | only                                        | 6.5e3 |
|   虽然    |      suī rán      | although; though                            | 5.1e3 |
|    可     |        kě         | can; may; approve; be worth; suit; but; yet | 4.7e3 |
|   并且    |      bìngqiě      | also                                        | 4.4e3 |
|   除非    |      chúfēi       | Unless                                      | 4.3e3 |
|    才     |                   |                                             | 3.8e3 |
|   否则    |       fǒuzé       | otherwise                                   | 3.8e3 |
|   即使    |       jíshǐ       | even if                                     | 3.5e3 |
|   因此    |       yīncǐ       | therefore                                   | 2.8e3 |
|   既然    |       jìrán       | Since                                       | 2.8e3 |
|   无论    |       wúlùn       | no matter                                   | 2.8e3 |
|   要是    |      yàoshi       | If                                          | 2.7e3 |
|   要么    |      yào me       | or; either … or …                           | 2.6e3 |
|   不然    |       bùrán       | otherwise                                   | 2.6e3 |
|   甚至    |      shènzhì      | Even to the extent that                     | 2.6e3 |
|   尽管    |      jǐnguǎn      | although                                    | 2.6e3 |
|   而是    |      ér shì       | but                                         | 2.1e3 |
|   同时    |      tóngshí      | meanwhile                                   | 2.0e3 |
|   只是    |      zhǐ shì      | merely; only; just                          | 1.9e3 |
|   或是    |      huò shì      | or                                          | 1.8e3 |
|   接着    |      jiēzhe       | Next                                        | 1.6e3 |
|   一旦    |       yídàn       | once; in case                               | 1.4e3 |
|    若     |        ruò        | like; seem; as; if                          | 1.4e3 |
|    又     |        yòu        | also                                        | 1.4e3 |
|   首先    |     shǒuxiān      | First                                       | 1.3e3 |
|   另外    |      lìngwài      | in addition                                 | 1.2e3 |
|   总之    |      zǒngzhī      | in short                                    | 1.2e3 |
|   不仅    |       bùjǐn       | not only                                    | 1.1e3 |
|   假如    |       jiǎrú       | If                                          | 1.0e3 |
|    既     |        jì         | already; since; as                          | 9.4e2 |
|   然而    |      rán’ér       | however                                     | 9.1e2 |
|   即便    |                   |                                             | 8.0e2 |
|   不论    |      bú lùn       | whether; no matter; whether … or            | 7.2e2 |
|   哪怕    |       nǎpà        | even if                                     | 6.6e2 |
|    且     |                   |                                             | 6.3e2 |
|  之所以   |                   |                                             | 5.8e2 |
|   由于    |       yóuyú       | Because                                     | 5.7e2 |
|   万一    |       wànyī       | In case                                     | 5.5e2 |
|   再说    |     zài shuō      | besides; put off until some time later; say | 4.5e2 |
|  要不然   |    yào bù rán     | otherwise                                   | 4.4e2 |
|    则     |                   |                                             | 3.9e2 |
|  无论是   |                   |                                             | 3.8e2 |
|   其次    |       qícì        | Secondly                                    | 3.4e2 |
|   要不    |                   |                                             | 3.3e2 |
|   不光    |     bù guāng      | not only                                    | 3.1e2 |
| 与此同时  |                   |                                             | 2.8e2 |
|   此外    |       cǐwài       | in addition                                 | 2.7e2 |
|   不但    |      bú dàn       | not only                                    | 2.6e2 |
|   不是    |                   |                                             | 2.4e2 |
|  以至于   |                   |                                             | 2.4e2 |
|   何况    |                   |                                             | 2.3e2 |
|    虽     |        suī        | though; although; even if                   | 2.3e2 |
| 另一方面  | lìng yì fāng miàn | on the other hand                           | 2.2e2 |
|   以免    |                   |                                             | 2.1e2 |
|   从而    |      cóng’ér      | thus                                        | 2.1e2 |
|    以     |                   |                                             | 2.1e2 |
| 换句话说  |                   |                                             | 1.8e2 |
|    如     |        rú         | as; if; according to                        | 1.6e2 |
|   一来    |                   |                                             | 1.6e2 |
|   果然    |      guǒrán       | Sure enough                                 | 1.6e2 |
|   况且    |                   |                                             | 1.5e2 |
|    因     |        yīn        | cause; reason; because                      | 1.4e2 |
|   虽说    |                   |                                             | 1.4e2 |
|  是因为   |                   |                                             | 1.3e2 |
|  就是说   |   jiù shì shuō    | that is; in other words; namely             | 1.2e2 |
| 恰恰相反  |                   |                                             | 1.2e2 |
|  不如说   |                   |                                             | 1.1e2 |
|  不论是   |                   |                                             | 9.1e1 |
|   抑或    |                   |                                             | 8.8e1 |
| 除此之外  |                   |                                             | 8.3e1 |
|  一方面   |   yì fāng miàn    | on the one hand                             | 8.1e1 |
|   不单    |                   |                                             | 8.0e1 |
|   以致    |                   |                                             | 8.0e1 |
| 总而言之  |                   |                                             | 7.6e1 |
|   以便    |      yǐbiàn       | so that                                     | 7.3e1 |
| 总的来说  |                   |                                             | 6.8e1 |
|   不只    |                   |                                             | 6.6e1 |
|    故     |                   |                                             | 6.4e1 |
| 既然如此  |                   |                                             | 6.3e1 |
|  紧接着   |                   |                                             | 6.1e1 |
|   不如    |       bùrú        | not as good as                              | 6.0e1 |
|   因而    |      yīn’ér       | thus                                        | 6.0e1 |
|   要说    |                   |                                             | 5.8e1 |
|    然     |                   |                                             | 5.6e1 |

## Classifier

| Character |  Pinyin  | Translation                                                 | Count |
| :-------: | :------: | ----------------------------------------------------------- | :---: |
|    个     |    gè    | individual                                                  | 1.7e5 |
|    些     |   xiē    | some                                                        | 2.1e4 |
|    件     |   jiàn   | piece                                                       | 2.0e4 |
|    位     |   wèi    | person (measure word)                                       | 1.6e4 |
|    种     |  zhǒng   | species; species                                            | 1.5e4 |
|    条     |   tiáo   | strip                                                       | 1.3e4 |
|    份     |   fèn    | share                                                       | 1.0e4 |
|    张     |  zhāng   | Zhang                                                       | 1.0e4 |
|    号     |   hào    | Number/date                                                 | 1.0e4 |
|    名     |   míng   | name                                                        | 9.6e3 |
|    块     |   kuài   | block                                                       | 9.3e3 |
|    家     |   jiā    | home                                                        | 9.3e3 |
|    只     |   zhǐ    | only; just; simply; merely; single; lonely                  | 8.3e3 |
|    段     |   duàn   | paragraph                                                   | 6.4e3 |
|    辆     |  liàng   | Car (measure word)                                          | 6.2e3 |
|    句     |    jù    | sentence                                                    | 6.0e3 |
|    起     |    qǐ    | get up; start; rise                                         | 5.1e3 |
|    杯     |   bēi    | cup                                                         | 4.9e3 |
|    部     |    bù    | unit; ministry; department; part; section                   | 4.6e3 |
|   美元    | měi yuán | U.S. dollar                                                 | 4.6e3 |
|    季     |    jì    | season; period                                              | 4.3e3 |
|    片     |   piàn   | slice                                                       | 4.2e3 |
|    集     |    jí    | gather; collect; collection; anthology; country fair; part  | 3.8e3 |
|    套     |   tào    | set                                                         | 3.3e3 |
|    支     |          |                                                             | 3.3e3 |
|    间     |   jiān   | between; measure word for rooms                             | 3.1e3 |
|    座     |   zuò    | Seat                                                        | 3.1e3 |
|    本     |          |                                                             | 3.0e3 |
|   点儿    |          |                                                             | 2.8e3 |
|    群     |   qún    | group                                                       | 2.6e3 |
|    颗     |    kē    | grain (measure word)                                        | 2.5e3 |
|    根     |   gēn    | root                                                        | 2.3e3 |
|    笔     |    bǐ    | pen                                                         | 2.3e3 |
|    口     |   kǒu    | mouth                                                       | 2.2e3 |
|    项     |  xiàng   | term                                                        | 2.1e3 |
|    封     |          |                                                             | 2.1e3 |
|    头     |          |                                                             | 2.0e3 |
|    台     |   tái    | platform                                                    | 2.0e3 |
|   英里    |          |                                                             | 2.0e3 |
|    员     |          |                                                             | 2.0e3 |
|    元     |   yuán   | element; Yuan                                               | 1.9e3 |
|    堆     |   duī    | heap                                                        | 1.8e3 |
|    瓶     |   píng   | bottle                                                      | 1.6e3 |
|    克     |    kè    | gram                                                        | 1.5e3 |
|    米     |          |                                                             | 1.5e3 |
|    艘     |          |                                                             | 1.5e3 |
|    倍     |   bèi    | times                                                       | 1.5e3 |
|    帮     |   bāng   | help                                                        | 1.4e3 |
|   英尺    |          |                                                             | 1.4e3 |
|    处     |   chǔ    | dwell; live; be in a position of                            | 1.4e3 |
|    莱     |          |                                                             | 1.4e3 |
|    对     |          |                                                             | 1.3e3 |
|    组     |    zǔ    | group                                                       | 1.3e3 |
|    类     |   lèi    | class; category; kind; type                                 | 1.3e3 |
|    磅     |          |                                                             | 1.3e3 |
|    眼     |   yǎn    | eye                                                         | 1.3e3 |
|    首     |          |                                                             | 1.3e3 |
|    票     |   piào   | ticket                                                      | 1.3e3 |
|    篇     |   piān   | piece                                                       | 1.2e3 |
|    所     |          |                                                             | 1.2e3 |
|    面     |          |                                                             | 1.2e3 |
|    匹     |    pǐ    | Horse (measure word)                                        | 1.2e3 |
|    行     |   xíng   | That’s ok; That’s ok                                        | 1.2e3 |
|    样     |   yàng   | appearance; shape; sample; model; pattern; kind; type       | 1.2e3 |
|    页     |    yè    | page                                                        | 1.1e3 |
|    栋     |          |                                                             | 1.1e3 |
|    幅     |    fú    | classifier of picture                                       | 1.0e3 |
|    双     |  shuāng  | double                                                      | 1.0e3 |
|    扇     |   shān   | fan; slap; flap; flutter; fan up; fan; leaf; (measure word) | 9.8e2 |
|   美金    | měi jīn  | USD; dollar                                                 | 9.8e2 |
|    伙     |   huǒ    | partner; partnership                                        | 9.1e2 |
|    队     |   duì    | team                                                        | 8.8e2 |
|    具     |          |                                                             | 8.6e2 |
|    码     |          |                                                             | 8.6e2 |
|    方     |   fāng   | square                                                      | 8.5e2 |
|    批     |          |                                                             | 8.3e2 |
|    身     |          |                                                             | 8.0e2 |
|    级     |    jí    | level; rank; grade; degree; step                            | 7.7e2 |
|    枚     |          |                                                             | 7.6e2 |
|    剂     |          |                                                             | 7.6e2 |
|    节     |          |                                                             | 6.4e2 |
|    棵     |    kē    | Tree (measure word)                                         | 6.2e2 |
|    尺     |   chǐ    | rule; ruler                                                 | 6.1e2 |
|    章     |  zhāng   | chapter; section; order; regulation; seal                   | 6.0e2 |
|    幕     |          |                                                             | 5.8e2 |
|    角     |   jiǎo   | horn                                                        | 5.7e2 |
|   英寸    |          |                                                             | 5.7e2 |
|    代     |   dài    | substitute; replace; take the place of                      | 5.6e2 |
|    桩     |          |                                                             | 5.5e2 |
|    里     |    lǐ    | in                                                          | 5.5e2 |
|   公里    |  gōnglǐ  | kilometre                                                   | 5.4e2 |
|    门     |   mén    | door                                                        | 5.4e2 |
|    股     |    gǔ    | thigh; portion; share; strand                               | 5.4e2 |
|    卷     |   juǎn   | roll; curly; reel; volume; file                             | 5.3e2 |
|    袋     |   dài    | bag; sack; pocket; pouch                                    | 5.1e2 |
|    丝     |          |                                                             | 5.1e2 |
|   系列    |  xìliè   | series                                                      | 5.0e2 |
|    刀     |   dāo    | knife                                                       | 4.7e2 |
|   周年    | zhōunián | anniversary                                                 | 4.7e2 |
|    班     |   bān    | class                                                       | 4.7e2 |

## Numeral

| Character |   Pinyin   | Translation                   | Count |
| :-------: | :--------: | ----------------------------- | :---: |
|   ﻿ 一    |            |                               | 2.0e5 |
|    两     |            |                               | 3.7e4 |
|    几     |     jǐ     | several                       | 2.2e4 |
|    多     |    duō     | many; much; more              | 1.9e4 |
|   第一    |            |                               | 1.8e4 |
|    三     |    sān     | Three                         | 1.7e4 |
|   很多    |            |                               | 1.5e4 |
|    俩     |    liǎ     | Two                           | 9.0e3 |
|    四     |     sì     | Four                          | 6.9e3 |
|    第     |            |                               | 6.8e3 |
|   第二    |            |                               | 6.4e3 |
|    万     |    wàn     | ten thousand                  | 6.0e3 |
|    五     |     wǔ     | Five                          | 5.9e3 |
|    半     |    bàn     | half                          | 5.4e3 |
|    二     |     èr     | Two                           | 4.7e3 |
|    首     |            |                               | 4.1e3 |
|    六     |    liù     | Six                           | 3.9e3 |
|   全部    |   quánbù   | whole                         | 3.6e3 |
|    十     |    shí     | Ten                           | 3.6e3 |
|    来     |    lái     | come                          | 3.1e3 |
|   第三    |            |                               | 2.9e3 |
|    整     |   zhěng    | whole; all; entire; complete  | 2.7e3 |
|   一半    |   yí bàn   | half                          | 2.6e3 |
|   部分    |   bùfen    | Part                          | 2.4e3 |
|    双     |   shuāng   | double                        | 2.3e3 |
|    八     |     bā     | eight                         | 2.1e3 |
|   许多    |   xǔduō    | many                          | 2.0e3 |
|    七     |     qī     | Seven                         | 2.0e3 |
|   不少    |  bù shǎo   | not a few; a lot              | 2.0e3 |
|   好几    |            |                               | 1.7e3 |
|   千万    |  qiānwàn   | Must                          | 1.6e3 |
|    千     |    qiān    | thousand                      | 1.5e3 |
|  大多数   | dà duō shù | most; great majority          | 1.4e3 |
|   第四    |            |                               | 1.3e3 |
|  大部分   | dà bù fèn  | most                          | 1.3e3 |
|   好多    |  hǎo duō   | many; a lot of                | 1.3e3 |
|    九     |    jiǔ     | Nine                          | 1.2e3 |
|    数     |    shǔ     | to count                      | 1.2e3 |
|   左右    |   zuǒyòu   | About                         | 1.1e3 |
|   第五    |            |                               | 1.0e3 |
|   好久    |  hǎo jiǔ   | for a long time; long         | 9.9e2 |
|    百     |    bǎi     | hundred                       | 9.8e2 |
|   一会    |            |                               | 9.3e2 |
|    头     |            |                               | 8.8e2 |
|   大量    |  dà liàng  | a lot of; lots of             | 8.4e2 |
|   百万    |            |                               | 8.3e2 |
|   不久    |   bù jiǔ   | soon                          | 8.0e2 |
|   第六    |            |                               | 7.0e2 |
|    亿     |     yì     | Billion                       | 6.8e2 |
|   一百    |            |                               | 6.5e2 |
|   无数    |   wúshù    | Countless                     | 6.5e2 |
|   二十    |            |                               | 6.2e2 |
|   一两    |            |                               | 6.1e2 |
|  一百万   |            |                               | 5.8e2 |
|   一千    |            |                               | 5.7e2 |
|    零     |            |                               | 5.7e2 |
|   第七    |            |                               | 5.5e2 |
|   十二    |            |                               | 5.2e2 |
|   一万    |            |                               | 4.9e2 |
|   几百    |            |                               | 4.8e2 |
|   第八    |            |                               | 4.3e2 |
|   三十    |            |                               | 4.2e2 |
|   几千    |            |                               | 3.3e2 |
|   第九    |            |                               | 3.1e2 |
|   多数    |  duō shù   | most; majority                | 3.0e2 |
|   五十    |            |                               | 2.8e2 |
|   十五    |            |                               | 2.8e2 |
|   十万    |            |                               | 2.7e2 |
|   好些    |            |                               | 2.7e2 |
|    许     |            |                               | 2.7e2 |
|   丝毫    |            |                               | 2.5e2 |
|   上千    |            |                               | 2.5e2 |
|   少数    |  shǎo shù  | small number; few; minority   | 2.4e2 |
|   片刻    |            |                               | 2.4e2 |
|  一部分   | yí bù fèn  | a part; a portion             | 2.4e2 |
|   四十    |            |                               | 2.3e2 |
|  几百万   |            |                               | 2.2e2 |
|   十几    |            |                               | 2.2e2 |
|   第十    |            |                               | 2.2e2 |
|   众多    | zhòng duō  | multitudinous; numerous; many | 2.1e2 |
|   上百    |            |                               | 2.0e2 |
|   亿万    |            |                               | 1.9e2 |
|   百分    |            |                               | 1.9e2 |
|   几十    |            |                               | 1.9e2 |
|  一整天   |            |                               | 1.8e2 |
|  两百万   |            |                               | 1.8e2 |
|   五千    |            |                               | 1.8e2 |
|   两三    |            |                               | 1.7e2 |
|  数百万   |            |                               | 1.6e2 |
|   终生    |            |                               | 1.6e2 |
| 四分之一  |            |                               | 1.6e2 |
|  上百万   |            |                               | 1.6e2 |
|   两千    |            |                               | 1.6e2 |
|  一千万   |            |                               | 1.5e2 |
|   三千    |            |                               | 1.5e2 |
|   三百    |            |                               | 1.5e2 |
|   五万    |            |                               | 1.5e2 |
|   十八    |            |                               | 1.5e2 |
|   十六    |            |                               | 1.5e2 |
|   两万    |            |                               | 1.4e2 |

## Directional Locality

| Character |   Pinyin   | Translation                                              | Count |
| :-------: | :--------: | -------------------------------------------------------- | :---: |
|    上     |   shàng    | upper                                                    | 8.1e4 |
|    里     |     lǐ     | in                                                       | 6.3e4 |
|    中     |   zhōng    | middle; in                                               | 3.2e4 |
|    下     |            |                                                          | 2.6e4 |
|    前     |    qián    | front                                                    | 2.6e4 |
|    后     |    hòu     | back; behind; after; later                               | 2.2e4 |
|   最后    |   zuìhòu   | Last                                                     | 1.5e4 |
|   之前    |  zhī qián  | before; prior to                                         | 1.5e4 |
|   以前    |   yǐqián   | before                                                   | 1.2e4 |
|   之后    |  zhī hòu   | later; after; afterwards                                 | 1.1e4 |
|   里面    |  lǐ miàn   | inside; interior                                         | 1.0e4 |
|    来     |    lái     | come                                                     | 1.0e4 |
|   以后    |   yǐ hòu   | after; later on; afterwards; later                       | 8.7e3 |
|    内     |    nèi     | within                                                   | 6.4e3 |
|   之间    |  zhī jiān  | between; among                                           | 6.2e3 |
|   外面    |  wài miàn  | outside; outdoors; outward appearance                    | 5.6e3 |
|   上面    | shàng miàn | above; on top of                                         | 5.4e3 |
|   后面    |  hòumiàn   | behind                                                   | 4.5e3 |
|    外     |    wài     | abroad; outside                                          | 4.1e3 |
|    底     |     dǐ     | bottom                                                   | 3.8e3 |
|   下面    |  xià miàn  | below; under; next                                       | 3.8e3 |
|   附近    |   fùjìn    | nearby                                                   | 3.3e3 |
|   面前    | miàn qián  | in front of; before                                      | 3.3e3 |
|    间     |    jiān    | between; measure word for rooms                          | 2.2e3 |
|   前面    |  qiánmiàn  | Front                                                    | 2.2e3 |
|   旁边    |  pángbiān  | Side                                                     | 2.1e3 |
|   周围    |  zhōuwéi   | around                                                   | 1.9e3 |
|    右     |    yòu     | right                                                    | 1.7e3 |
|    西     |     xī     | west                                                     | 1.7e3 |
|   以来    |   yǐlái    | Since                                                    | 1.6e3 |
|   中间    | zhōngjiān  | Middle                                                   | 1.6e3 |
|   之中    | zhī zhōng  | in; in the midst of; among                               | 1.5e3 |
|    东     |    dōng    | east                                                     | 1.2e3 |
|   背后    |  bèi hòu   | behind; at the back; in the rear                         | 1.2e3 |
|   之外    |  zhī wài   | outside; except                                          | 1.1e3 |
|   之内    |  zhī nèi   | in; within                                               | 1.0e3 |
|   左边    |  zuǒbian   | left                                                     | 1.0e3 |
|   内部    |   nèibù    | interior                                                 | 1.0e3 |
|    北     |    běi     | north                                                    | 1.0e3 |
|    起     |     qǐ     | get up; start; rise                                      | 1.0e3 |
|    左     |    zuǒ     | left                                                     | 9.5e2 |
|   当中    | dāng zhōng | among; in the middle; in the centre                      | 9.4e2 |
|   期间    |   qījiān   | Period                                                   | 8.8e2 |
|   右边    |  yòubian   | Right                                                    | 8.7e2 |
|   底下    |   dǐ xià   | under; below; beneath                                    | 8.6e2 |
|   以外    |   yǐ wài   | beyond; outside; other than; except                      | 8.0e2 |
|    旁     |    páng    | side; other; else                                        | 7.9e2 |
|   以下    |   yǐ xià   | below; under                                             | 6.8e2 |
|   之下    |  zhī xià   | under                                                    | 6.6e2 |
|   对面    |  duìmiàn   | Opposite side                                            | 6.4e2 |
|    初     |    chū     | beginning; start; basis; at the beginning of             | 6.1e2 |
|   身后    |            |                                                          | 5.4e2 |
|   以上    |  yǐ shàng  | above; over                                              | 5.3e2 |
|   边上    |            |                                                          | 5.1e2 |
|   西部    |   xī bù    | west                                                     | 5.0e2 |
|   尽头    |            |                                                          | 4.5e2 |
|   东西    |   dōngxi   | thing                                                    | 4.2e2 |
|    南     |    nán     | south                                                    | 4.0e2 |
|   四周    |  sì zhōu   | all around                                               | 3.5e2 |
|   南部    |   nán bù   | south                                                    | 3.5e2 |
|   之上    |            |                                                          | 3.2e2 |
|   北部    |   běi bù   | north                                                    | 2.8e2 |
|   脚下    |            |                                                          | 2.7e2 |
|   东部    |  dōng bù   | east                                                     | 2.7e2 |
|   两边    | liǎng biān | both sides                                               | 2.5e2 |
|   里头    |   lǐ tou   | inside                                                   | 2.4e2 |
|    末     |     mò     | end; last; final stage                                   | 2.4e2 |
|   中部    |  zhōng bù  | central section; middle part                             | 2.2e2 |
|   上头    |            |                                                          | 2.0e2 |
|   北边    |  běi biān  | North side                                               | 1.9e2 |
|   外头    |  wài tou   | outside                                                  | 1.8e2 |
|   南边    |  nán biān  | south; south side                                        | 1.8e2 |
|   外部    |   wài bù   | outside; external; exterior                              | 1.7e2 |
|   外边    |  wài biān  | outside                                                  | 1.7e2 |
|   一边    |   yìbiān   | One side                                                 | 1.7e2 |
|   以内    |   yǐ nèi   | within                                                   | 1.6e2 |
|   底部    |            |                                                          | 1.6e2 |
|   侧面    |            |                                                          | 1.6e2 |
|   上方    |            |                                                          | 1.6e2 |
|   背面    |            |                                                          | 1.5e2 |
|   前后    |  qián hòu  | front and back; from start to finish; around             | 1.4e2 |
|   上下    | shàng xià  | up and down; top and bottom; high and low; old and young | 1.4e2 |
|   里边    |  lǐ biān   | inside                                                   | 1.3e2 |
|   正中    |            |                                                          | 1.3e2 |
|   北面    |            |                                                          | 1.3e2 |
|   上层    |            |                                                          | 1.2e2 |
|   一旁    |            |                                                          | 1.2e2 |
|   东边    | dōng biān  | east side                                                | 1.2e2 |
|   西边    |  xī biān   | west; west side                                          | 1.2e2 |
|   左侧    |            |                                                          | 1.1e2 |
|   之际    |            |                                                          | 1.1e2 |
|   上边    | shàng biān | above; on                                                | 1.1e2 |
|   右侧    |            |                                                          | 1.1e2 |
|   下方    |            |                                                          | 1.1e2 |
|   外围    |            |                                                          | 1.0e2 |
|   早期    |   zǎo qī   | early phase; early stage                                 | 1.0e2 |
|   后边    |  hòu biān  | behind; back                                             | 1.0e2 |
|   后头    |  hòu tou   | back                                                     | 1.0e2 |
|   顶层    |            |                                                          | 9.3e1 |
|   南面    |            |                                                          | 9.2e1 |

## Personal Name

| Character  |      Pinyin      | Translation           | Count |
| :--------: | :--------------: | --------------------- | :---: |
|    杰克    |      jiékè       | Jack                  | 5.2e3 |
|     周     |       zhōu       | Zhou (week)           | 2.5e3 |
|    约翰    |      yuēhàn      | John                  | 2.0e3 |
|     帅     |      shuài       | Handsome              | 1.9e3 |
|    耶稣    |       yēsū       | Jesus                 | 1.5e3 |
|    汤姆    |      tāngmǔ      | Tom                   | 1.4e3 |
|     毛     |       máo        | Mao (hair)            | 1.3e3 |
|    查理    |      chálǐ       | Charlie               | 1.3e3 |
|    乔治    |     qiáozhì      | George                | 1.3e3 |
|    麦克    |      màikè       | Mike                  | 1.3e3 |
|   弗兰克   |     fúlánkè      | Frank                 | 1.2e3 |
|    比尔    |      bǐ'ěr       | Bill                  | 1.2e3 |
|    大卫    |      dà wèi      | David                 | 1.2e3 |
|     迪     |        dí        | Di (to enlighten)     | 1.1e3 |
|    乔伊    |     qiáo yī      | Joey                  | 1.0e3 |
|     张     |      zhāng       | Zhang                 | 1.0e3 |
|    彼得    |       bǐdé       | Peter                 | 1.0e3 |
|    玛丽    |       mǎlì       | Mary                  | 9.8e2 |
|  福尔摩斯  |    fú'ěrmósī     | Sherlock Holmes       | 9.3e2 |
|     艾     |        ài        | Ai (mugwort)          | 9.3e2 |
|    卡尔    |      kǎ'ěr       | Karl                  | 9.0e2 |
|     王     |       wáng       | King                  | 8.9e2 |
|    威尔    |      wēi ěr      | Will                  | 8.6e2 |
|    丹尼    |      dān ní      | Danny                 | 8.6e2 |
|    尼克    |       níkè       | Nick                  | 8.1e2 |
|   克莱尔   |     kèlái'ěr     | Claire                | 8.1e2 |
|    皮特    |       pítè       | Peter                 | 8.0e2 |
|    鲍勃    |      bào bó      | Bob                   | 8.0e2 |
|    安娜    |       ānnà       | Anna                  | 7.9e2 |
|     李     |        lǐ        | Li (plum)             | 7.7e2 |
|    亨利    |      hēnglì      | Henry                 | 7.7e2 |
|    汤米    |     tāng mǐ      | Tommy                 | 7.3e2 |
|    保罗    |      bǎoluó      | Paul                  | 7.2e2 |
|    山姆    |      shānmǔ      | Sam                   | 7.1e2 |
|     马     |        mǎ        | Ma (horse)            | 7.0e2 |
|   迈克尔   |     màikè'ěr     | Michael               | 6.9e2 |
|   詹姆斯   |     zhānmǔsī     | James                 | 6.9e2 |
|    迈克    |      màikè       | Mike                  | 6.9e2 |
|    凯文    |     kǎi wén      | Kevin                 | 6.8e2 |
|    比利    |      bǐ lì       | Billy                 | 6.7e2 |
|    哈里    |       hālǐ       | Harry                 | 6.7e2 |
|    莎拉    |      shā lā      | Sarah                 | 6.4e2 |
|    阿门    |       āmén       | Amen                  | 6.4e2 |
|   克里斯   |     kè lǐsī      | Chris                 | 6.3e2 |
|    西蒙    |      xīméng      | Simon                 | 6.2e2 |
|   维加斯   |    wéi jiā sī    | Vegas                 | 6.2e2 |
|    凯特    |      kǎitè       | Kate                  | 6.0e2 |
|    吉姆    |       jímǔ       | Jim                   | 6.0e2 |
|    哈利    |      hā lì       | Harry                 | 5.8e2 |
| 拉斯维加斯 | lā sī wéi jiā sī | Las Vegas             | 5.8e2 |
|     黄     |      huáng       | Huang (yellow)        | 5.8e2 |
|     後     |       hòu        | Hou (back)            | 5.7e2 |
|    马丁    |      mǎdīng      | Martin                | 5.7e2 |
|    亚瑟    |      yà sè       | Arthur                | 5.6e2 |
|    威廉    |     wēilián      | William               | 5.6e2 |
|    凯蒂    |      kǎi dì      | Katie                 | 5.4e2 |
|     陈     |       chén       | Chen (list)           | 5.4e2 |
|    华生    |    huá shēng     | Watson                | 5.4e2 |
|     崔     |       cuī        | Choi (precipitous)    | 5.3e2 |
|    托尼    |      tuōní       | Tony                  | 5.3e2 |
|    安迪    |      ān dí       | Andy                  | 5.2e2 |
|   查尔斯   |     chá'ěrsī     | Charles               | 5.2e2 |
|   希特勒   |     xītèlēi      | Hitler                | 5.2e2 |
|    肖恩    |     xiào ēn      | Sean                  | 5.2e2 |
|    鲍尔    |      bào ěr      | Ball                  | 5.0e2 |
|   麦克斯   |     màikè sī     | Max                   | 5.0e2 |
|    珍妮    |      zhēnnī      | Jenny                 | 4.9e2 |
|     白     |       bái        | Bai (white)           | 4.9e2 |
|     胡     |        hú        | Hu                    | 4.9e2 |
|    杰夫    |      jié fū      | Jeff                  | 4.8e2 |
|    琼斯    |     qióngsī      | Jones                 | 4.8e2 |
|    凯尔    |      kǎi ěr      | Kyle                  | 4.8e2 |
|    安妮    |       ānnī       | Annie                 | 4.8e2 |
|    泰勒    |      tàilēi      | Taylor                | 4.7e2 |
|    戴夫    |      dài fū      | Dave                  | 4.5e2 |
|   霍华德   |     huòhuádé     | Howard                | 4.5e2 |
|    鲍比    |      bào bǐ      | Bobby                 | 4.5e2 |
|    罗杰    |     luō jié      | Roger                 | 4.5e2 |
|   丹尼斯   |     dānnísī      | Dennis                | 4.5e2 |
|     萨     |        sà        | Sa (Buddha)           | 4.4e2 |
|    莉莉    |       lìlì       | Lily                  | 4.4e2 |
|    斯坦    |      sītǎn       | Stan                  | 4.3e2 |
|   凯瑟琳   |     kǎisèlín     | Katherine             | 4.3e2 |
|   全美超   |   quánměi chāo   | American Super League | 4.3e2 |
|    卡拉    |       kǎlā       | Kara                  | 4.2e2 |
|   罗伯特   |     luōbótè      | Robert                | 4.2e2 |
|    迪克    |       díkè       | Dick                  | 4.2e2 |
|     玛     |        mǎ        | Ma                    | 4.2e2 |
|  亚历克斯  |   yà lì kè sī    | Alex                  | 4.1e2 |
|   丹尼尔   |     dānní'ěr     | Daniel                | 4.0e2 |
|    杰瑞    |     jié ruì      | Jerry                 | 4.0e2 |
|   史蒂夫   |    shǐ dì fū     | Steve                 | 4.0e2 |
|    杰西    |      jié xī      | Jesse                 | 4.0e2 |
|  伊丽莎白  |    yīlìshābái    | Elizabeth             | 3.9e2 |
|   克罗伊   |    kè luó yī     | Croy                  | 3.9e2 |
|    海伦    |      hǎilún      | Helen                 | 3.9e2 |
|    威利    |      wēi lì      | Willie                | 3.8e2 |
|    泰德    |      tài dé      | Ted                   | 3.8e2 |
|    艾米    |      ài mǐ       | Amy                   | 3.8e2 |
|    琳达    |      lín dá      | Linda                 | 3.7e2 |

## Morpheme

| Character | Pinyin | Translation                                                   | Count |
| :-------: | :----: | ------------------------------------------------------------- | :---: |
|    时     |  shí   | time; times; hour; season; tense                              | 2.3e4 |
|    喝     |   hē   | drink                                                         | 1.4e4 |
|    儿     |        |                                                               | 5.2e3 |
|    恩     |        |                                                               | 5.0e3 |
|    员     |        |                                                               | 4.7e3 |
|    象     |        |                                                               | 4.5e3 |
|    警     |        |                                                               | 4.2e3 |
|    子     |        |                                                               | 3.9e3 |
|    酷     |   kù   | cool; cruel; brutal; oppressive; very; extremely              | 3.9e3 |
|    身     |        |                                                               | 3.7e3 |
|    性     |        |                                                               | 3.7e3 |
|    案     |        |                                                               | 3.4e3 |
|    特     |   tè   | particular; special; exceptional; unusual; especially; very   | 3.4e3 |
|    感     |        |                                                               | 3.1e3 |
|    杯     |  bēi   | cup                                                           | 2.7e3 |
|    秀     |        |                                                               | 2.4e3 |
|    机     |        |                                                               | 2.3e3 |
|    主     |        |                                                               | 2.3e3 |
|    圣     |        |                                                               | 2.2e3 |
|    爽     | shuǎng | bright; clear; frank; straightforward; openhearted; feel well | 2.2e3 |
|    行     |  xíng  | That’s ok; That’s ok                                          | 2.1e3 |
|    棒     |  bàng  | stick；excellent                                              | 2.0e3 |
|    帐     |        |                                                               | 2.0e3 |
|    战     |        |                                                               | 1.9e3 |
|    克     |   kè   | gram                                                          | 1.9e3 |
|    语     |        |                                                               | 1.9e3 |
|    师     |        |                                                               | 1.7e3 |
|    什     |        |                                                               | 1.5e3 |
|    物     |        |                                                               | 1.5e3 |
|    声     | shēng  | sound; voice; reputation; tone                                | 1.5e3 |
|    尸     |        |                                                               | 1.5e3 |
|    咪     |        |                                                               | 1.4e3 |
|    奇     |        |                                                               | 1.4e3 |
|    魔     |        |                                                               | 1.4e3 |
|    基     |        |                                                               | 1.4e3 |
|    蒂     |        |                                                               | 1.3e3 |
|    久     |  jiǔ   | long                                                          | 1.3e3 |
|    乔     |        |                                                               | 1.3e3 |
|    器     |        |                                                               | 1.3e3 |
|    杰     |        |                                                               | 1.3e3 |
|    佬     |        |                                                               | 1.3e3 |
|    强     | qiáng  | strong; powerful; better                                      | 1.3e3 |
|    击     |        |                                                               | 1.2e3 |
|    模     |        |                                                               | 1.2e3 |
|    妮     |        |                                                               | 1.2e3 |
|    婚     |        |                                                               | 1.2e3 |
|    味     |        |                                                               | 1.1e3 |
|    症     |        |                                                               | 1.1e3 |
|    体     |        |                                                               | 1.1e3 |
|    意     |        |                                                               | 1.1e3 |
|    诺     |        |                                                               | 1.1e3 |
|    林     |        |                                                               | 1.1e3 |
|    瑞     |        |                                                               | 1.1e3 |
|    麦     |        |                                                               | 1.1e3 |
|    板     |  bǎn   | board; plank; shutter                                         | 1.1e3 |
|    史     |        |                                                               | 1.0e3 |
|    言     |        |                                                               | 1.0e3 |
|    司     |        |                                                               | 1.0e3 |
|    日     |   rì   | date                                                          | 1.0e3 |
|    纹     |        |                                                               | 1.0e3 |
|    胸     |        |                                                               | 1.0e3 |
|    丽     |        |                                                               | 1.0e3 |
|    文     |        |                                                               | 9.9e2 |
|    兰     |        |                                                               | 9.8e2 |
|    客     |        |                                                               | 9.7e2 |
|    镜     |        |                                                               | 9.5e2 |
|    样     |  yàng  | appearance; shape; sample; model; pattern; kind; type         | 9.5e2 |
|    木     |        |                                                               | 9.4e2 |
|    夫     |        |                                                               | 8.9e2 |
|    普     |        |                                                               | 8.7e2 |
|    森     |        |                                                               | 8.7e2 |
|    具     |        |                                                               | 8.6e2 |
|    妞     |        |                                                               | 8.4e2 |
|    士     |        |                                                               | 8.3e2 |
|    影     |        |                                                               | 8.3e2 |
|    侠     |        |                                                               | 8.3e2 |
|    交     |  jiāo  | hand over                                                     | 8.1e2 |
|    明     |        |                                                               | 8.0e2 |
|    骨     |        |                                                               | 7.8e2 |
|    趣     |        |                                                               | 7.8e2 |
|    父     |        |                                                               | 7.7e2 |
|    职     |        |                                                               | 7.7e2 |
|    谎     |        |                                                               | 7.7e2 |
|    金     |  jīn   | gold                                                          | 7.6e2 |
|    箱     | xiāng  | chest; box; case; trunk                                       | 7.6e2 |
|    轮     |  lún   | wheel; ring; take turns                                       | 7.6e2 |
|    术     |        |                                                               | 7.4e2 |
|    校     |        |                                                               | 7.2e2 |
|    庭     |        |                                                               | 7.1e2 |
|    狂     | kuáng  | mad; crazy; violent; wild; unrestrained                       | 7.0e2 |
|    善     |        |                                                               | 7.0e2 |
|    形     |  xíng  | form; shape; body; entity; appear; look                       | 6.8e2 |
|    蕾     |        |                                                               | 6.8e2 |
|    仔     |        |                                                               | 6.7e2 |
|    世     |        |                                                               | 6.7e2 |
|    检     |        |                                                               | 6.7e2 |
|    澡     |        |                                                               | 6.5e2 |
|    录     |   lù   | record; write down; copy                                      | 6.5e2 |
|    异     |        |                                                               | 6.4e2 |
|    族     |   zú   | clan; race; nationality                                       | 6.3e2 |

## Time Word

| Character |    Pinyin     | Translation                                 | Count |
| :-------: | :-----------: | ------------------------------------------- | :---: |
|   现在    |    xiànzài    | Now                                         | 8.8e4 |
|   今天    |    jīntiān    | Today                                       | 2.5e4 |
|   今晚    |               |                                             | 1.4e4 |
|   明天    |   míngtiān    | Tomorrow                                    | 1.0e4 |
|   晚上    |   wǎnshang    | Night                                       | 9.6e3 |
|   当时    |    dāngshí    | at that time                                | 6.9e3 |
|    年     |     nián      | year                                        | 6.7e3 |
|    点     |     diǎn      | spot                                        | 6.4e3 |
|   刚才    |    gāngcái    | just                                        | 6.3e3 |
|   过去    |               |                                             | 6.3e3 |
|   最近    |    zuìjìn     | Lately                                      | 5.5e3 |
|   昨晚    |               |                                             | 5.4e3 |
|   早上    |   zǎoshang    | Morning                                     | 5.0e3 |
|   昨天    |    zuótiān    | Yesterday                                   | 4.5e3 |
|   未来    |    wèilái     | Future                                      | 3.4e3 |
|   下午    |     xiàwǔ     | Afternoon                                   | 2.9e3 |
|   目前    |    mùqián     | at present                                  | 2.8e3 |
|    月     |      yuè      | month                                       | 2.8e3 |
|   后来    |    hòulái     | later                                       | 2.7e3 |
|   周末    |    zhōumò     | Weekend                                     | 2.2e3 |
|   下次    |    xià cì     | next time                                   | 2.2e3 |
|   圣诞    |               |                                             | 2.1e3 |
|    分     |               |                                             | 2.1e3 |
|   去年    |    qùnián     | Last year                                   | 1.9e3 |
|   今年    |   jīn nián    | this year                                   | 1.8e3 |
|    日     |      rì       | date                                        | 1.8e3 |
|    秒     |     miǎo      | seconds                                     | 1.7e3 |
|   上次    |   shàng cì    | last time                                   | 1.7e3 |
|  圣诞节   | shèng dàn jié | Christmas                                   | 1.7e3 |
|   上周    |  shàng zhōu   | last week                                   | 1.6e3 |
|   那天    |               |                                             | 1.5e3 |
|   夜晚    |               |                                             | 1.2e3 |
|   夏天    |   xià tiān    | summer                                      | 1.1e3 |
|   早晨    |   zǎo chén    | morning                                     | 1.0e3 |
|   一分    |               |                                             | 9.5e2 |
|   将来    |   jiānglái    | future                                      | 9.1e2 |
|   当初    |    dāngchū    | Original                                    | 7.8e2 |
|   周五    |               |                                             | 7.5e2 |
|  一整天   |               |                                             | 7.3e2 |
|   午夜    |               |                                             | 7.3e2 |
|   凌晨    |               |                                             | 7.3e2 |
|  小时候   | xiǎo shí hou  | in one’s childhood; when one was young      | 7.2e2 |
|   明早    |               |                                             | 7.0e2 |
|   周六    |               |                                             | 7.0e2 |
|   明晚    |               |                                             | 6.6e2 |
|   平时    |    píngshí    | peacetime                                   | 6.4e2 |
|   中午    |    zhōngwǔ    | Noon                                        | 6.4e2 |
|   明年    |   míng nián   | next year                                   | 6.3e2 |
|   上午    |    shàngwǔ    | morning                                     | 6.0e2 |
|   假期    |    jià qī     | holiday; vacation                           | 5.8e2 |
|   白天    |   bái tiān    | day                                         | 5.8e2 |
|   如今    |     rújīn     | nowadays                                    | 5.8e2 |
|   一时    |    yì shí     | for a short while; temporary; momentary     | 5.6e2 |
|  感恩节   |               |                                             | 5.6e2 |
|  星期五   |               |                                             | 5.4e2 |
|   半夜    |    bàn yè     | midnight                                    | 5.3e2 |
|  星期六   |               |                                             | 5.1e2 |
|   现代    |    xiàndài    | modern                                      | 5.1e2 |
|  星期天   | xīng qī tiān  | Sunday                                      | 4.7e2 |
|   周日    |               |                                             | 4.6e2 |
|   新年    |   xīn nián    | New Year                                    | 4.5e2 |
|   春天    |   chūn tiān   | spring                                      | 4.5e2 |
|   当晚    |               |                                             | 4.4e2 |
|   冬天    |   dōng tiān   | winter                                      | 4.4e2 |
|   当年    |   dāng nián   | in those years; in those days               | 4.4e2 |
|   从前    |   cóngqián    | before                                      | 4.1e2 |
|   童年    |   tóng nián   | childhood; babyhood                         | 3.9e2 |
|  星期一   |               |                                             | 3.8e2 |
|   周二    |               |                                             | 3.7e2 |
|   三点    |               |                                             | 3.6e2 |
|   瞬间    |               |                                             | 3.6e2 |
|   一秒    |               |                                             | 3.5e2 |
|   周四    |               |                                             | 3.4e2 |
|   往常    |               |                                             | 3.4e2 |
|   今日    |    jīn rì     | today                                       | 3.3e2 |
|   一早    |               |                                             | 3.3e2 |
|   以往    |    yǐwǎng     | Past                                        | 3.2e2 |
|   八点    |               |                                             | 3.2e2 |
|   暑假    |    shǔ jià    | summer vacation                             | 3.2e2 |
|   当天    |   dāng tiān   | that day                                    | 3.2e2 |
|   今后    |    jīn hòu    | from now on; in the future                  | 3.2e2 |
|   夜里    |     yè lǐ     | at night                                    | 3.2e2 |
|  情人节   |               |                                             | 3.1e2 |
|   一点    |               |                                             | 3.1e2 |
|   往后    |   wǎng hòu    | from now on; later; in the future; backward | 3.0e2 |
|  星期二   |               |                                             | 3.0e2 |
|   会上    |               |                                             | 3.0e2 |
|   周一    |               |                                             | 2.9e2 |
|  星期三   |               |                                             | 2.9e2 |
|   六点    |               |                                             | 2.8e2 |
|   酒后    |               |                                             | 2.8e2 |
|   那年    |               |                                             | 2.8e2 |
|  星期四   |               |                                             | 2.7e2 |
|   四分    |               |                                             | 2.7e2 |
|  上个月   | shàng gè yuè  | last month                                  | 2.6e2 |
|   秋天    |   qiū tiān    | fall; autumn                                | 2.5e2 |
|   九点    |               |                                             | 2.5e2 |
|   眼前    |   yǎn qián    | now; at the moment; before one’s eyes       | 2.5e2 |
|   黎明    |               |                                             | 2.5e2 |
|   今夜    |               |                                             | 2.4e2 |

## Verb With Nominal Function

| Character |  Pinyin   | Translation                          | Count |
| :-------: | :-------: | ------------------------------------ | :---: |
|   工作    |  gōngzuò  | work                                 | 2.6e4 |
|   生活    | shēnghuó  | Life                                 | 1.4e4 |
|   比赛    |   bǐsài   | Match                                | 8.8e3 |
|   行动    | xíngdòng  | Get some action                      | 5.3e3 |
|   表演    |  biǎoyǎn  | perform                              | 4.0e3 |
|   有关    | yǒu guān  | related; concerning; relate; concern | 3.2e3 |
|   犯罪    |  fàn zuì  | commit a crime; offense; crime       | 3.1e3 |
|   活动    |  huódòng  | activity                             | 2.8e3 |
|   选择    |  xuǎnzé   | Choice                               | 2.2e3 |
|   调查    |  diàochá  | investigation                        | 2.1e3 |
|   帮助    |  bāngzhù  | Help                                 | 2.0e3 |
|   表现    | biǎoxiàn  | performance                          | 1.9e3 |
|   训练    |  xùnliàn  | train                                | 1.8e3 |
|   合作    |   hézuò   | cooperation                          | 1.8e3 |
|    爱     |    ài     | love                                 | 1.7e3 |
|   测试    |  cè shì   | test; examination                    | 1.7e3 |
|   服务    |   fú wù   | service                              | 1.7e3 |
|   研究    |  yánjiū   | research                             | 1.7e3 |
|   进展    |  jìnzhǎn  | evolve; get along                    | 1.6e3 |
|   反应    |  fǎnyìng  | reaction                             | 1.5e3 |
|   保护    |   bǎohù   | protect                              | 1.3e3 |
|   检查    |  jiǎnchá  | inspect; check                       | 1.3e3 |
|   挑战    | tiǎozhàn  | Dekaron                              | 1.3e3 |
|   影响    | yǐngxiǎng | Influence                            | 1.3e3 |
|   运动    |  yùndòng  | motion                               | 1.3e3 |
|   准备    |  zhǔnbèi  | Get ready                            | 1.2e3 |
|   治疗    |  zhìliáo  | Treatment                            | 1.2e3 |
|   感受    |  gǎnshòu  | feel                                 | 1.2e3 |
|   联系    |  liánxì   | contact                              | 1.2e3 |
|   爆炸    |  bàozhà   | blast                                | 1.1e3 |
|   变化    |  biànhuà  | change                               | 1.1e3 |
|   设计    |   shèjì   | Design                               | 1.1e3 |
|   威胁    |  wēixié   | threaten                             | 1.1e3 |
|   控制    |  kòngzhì  | control                              | 1.1e3 |
|    赛     |    sài    | match; compete; contest; competition | 1.1e3 |
|   演出    |  yǎnchū   | show                                 | 1.1e3 |
|   谈话    |  tán huà  | conversation; talk; chat             | 1.1e3 |
|   谋杀    |           |                                      | 1.0e3 |
|   教育    |  jiàoyù   | education                            | 9.2e2 |
|  同性恋   |           |                                      | 9.2e2 |
|   投票    |  tóupiào  | vote                                 | 9.0e2 |
|   袭击    |           |                                      | 8.5e2 |
|   监控    |           |                                      | 8.2e2 |
|   大赛    |  dà sài   | contest                              | 8.0e2 |
|   信任    |  xìnrèn   | trust                                | 7.9e2 |
|   移动    |  yídòng   | move                                 | 7.9e2 |
|   管理    |  guǎnlǐ   | Administration                       | 7.6e2 |
|   伤害    | shānghài  | hurt                                 | 7.6e2 |
|   胜利    |  shènglì  | victory                              | 7.2e2 |
|   决赛    |  juésài   | Finals                               | 7.2e2 |
|   战斗    |  zhàndòu  | Battle                               | 7.2e2 |
|   审判    |           |                                      | 6.9e2 |
|   飞行    | fēi xíng  | flight; flying                       | 6.8e2 |
|   攻击    |  gōngjī   | attack                               | 6.7e2 |
|   分析    |   fēnxī   | Analysis                             | 6.7e2 |
|   存在    |  cúnzài   | existence                            | 6.7e2 |
|   交流    |  jiāoliú  | Communication                        | 6.6e2 |
|   交易    |  jiāoyì   | transaction                          | 6.6e2 |
|   竞争    | jìngzhēng | compete                              | 6.6e2 |
|   发展    |  fāzhǎn   | Development                          | 6.4e2 |
|   支持    |  zhīchí   | Support                              | 6.4e2 |
|   旅行    |  lǚxíng   | travel                               | 6.1e2 |
|   解释    |  jiěshì   | explain                              | 6.1e2 |
|   试验    |  shìyàn   | test                                 | 6.1e2 |
|   惩罚    |           |                                      | 6.1e2 |
|   信仰    |  xìnyǎng  | Faith                                | 5.9e2 |
|   广播    |  guǎngbō  | Radio broadcast                      | 5.9e2 |
|   死亡    |  sǐwáng   | death                                | 5.8e2 |
|   考试    |  kǎoshì   | Examination                          | 5.8e2 |
|   主管    |  zhǔguǎn  | Executive director                   | 5.7e2 |
|   演讲    | yǎnjiǎng  | speech                               | 5.6e2 |
|   承诺    | chéngnuò  | Promise                              | 5.5e2 |
|   进步    |   jìnbù   | progress                             | 5.5e2 |
|   检测    |  jiǎn cè  | detect; test                         | 5.4e2 |
|   实验    |  shíyàn   | Experiment                           | 5.4e2 |
|   报警    |  bàojǐng  | call the police                      | 5.4e2 |
|   娱乐    |   yúlè    | entertainment                        | 5.4e2 |
|   投资    |   tóuzī   | Investment                           | 5.4e2 |
|   聚会    |   jùhuì   | Party                                | 5.3e2 |
|   冲突    |  chōngtū  | conflict                             | 5.2e2 |
|   结婚    |  jiéhūn   | marry                                | 5.2e2 |
|   录音    |   lùyīn   | Sound recording                      | 5.0e2 |
|   斗争    | dòuzhēng  | Struggle                             | 5.0e2 |
|   委托    |  wěituō   | Entrust                              | 5.0e2 |
|   欢迎    | huānyíng  | Welcome                              | 5.0e2 |
|   出口    |  chūkǒu   | Exit                                 | 4.9e2 |
|   奖励    |  jiǎnglì  | reward                               | 4.9e2 |
|   竞选    |           |                                      | 4.9e2 |
|   误会    |   wùhuì   | Misunderstanding                     | 4.9e2 |
|   到来    |  dào lái  | arrival; advent                      | 4.8e2 |
|   回忆    |   huíyì   | Memory                               | 4.8e2 |
|   交往    | jiāowǎng  | affiliate with                       | 4.7e2 |
|   咨询    |   zīxún   | Consultation                         | 4.6e2 |
|   联络    |  liánluò  | liaison                              | 4.6e2 |
|   安排    |   ānpái   | arrange                              | 4.5e2 |
|   游泳    |  yóuyǒng  | Swimming                             | 4.4e2 |
|   指控    |           |                                      | 4.4e2 |
|   杀人    |           |                                      | 4.4e2 |
|   诉讼    |           |                                      | 4.4e2 |
|   谈判    |  tánpàn   | negotiation                          | 4.3e2 |

## ? Conjunction Conjunction

| Character | Pinyin | Translation | Count |
| :-------: | :----: | ----------- | :---: |
|    和     |   hé   | and         | 1.4e5 |
|    而     |   ér   | and         | 3.9e4 |
|    并     |        |             | 5.7e3 |
|   以及    |  yǐjí  | as well as  | 3.6e3 |
|    与     |   yǔ   | and         | 2.8e3 |
|   于是    | yúshì  | Therefore   | 2.0e3 |
|    及     |        |             | 1.9e3 |
|   及其    |        |             | 1.1e2 |
|   以至    |        |             | 3.2e1 |
|   加之    |        |             | 1.5e1 |
|  换言之   |        |             | 1.2e1 |
|    暨     |        |             | 1.1e1 |

## ? Numeric Classifier

| Character |   Pinyin   | Translation                               | Count |
| :-------: | :--------: | ----------------------------------------- | :---: |
|   一个    |            |                                           | 1.2e5 |
|   一下    |            |                                           | 2.7e4 |
|   一点    |            |                                           | 2.0e4 |
|   一些    |   yì xiē   | some                                      | 1.7e4 |
|  一会儿   |   yíhuìr   | A little while                            | 3.3e3 |
|   一刻    |            |                                           | 1.5e3 |
|  一辈子   |  yíbèizi   | A lifetime                                | 1.3e3 |
|   一路    |   yí lù    | all the way; take the same route          | 9.9e2 |
|  一点儿   |  yīdiǎnr   | a little bit                              | 9.4e2 |
|  一阵子   |            |                                           | 5.2e2 |
|   一阵    |            |                                           | 5.0e2 |
|   一番    |   yì fān   | some; one time                            | 4.8e2 |
|  一下子   | yí xià zi  | all of a sudden; all at once; for a while | 3.4e2 |
|   多年    |  duō nián  | many years                                | 2.5e2 |
|   一对    |            |                                           | 2.3e2 |
|   多次    |   duō cì   | repeatedly; many a time                   | 2.2e2 |
|  半辈子   |            |                                           | 2.1e2 |
|   半天    |  bàn tiān  | half day                                  | 1.1e2 |
|   半点    |            |                                           | 9.6e1 |
|   百年    |            |                                           | 5.5e1 |
|  一整套   |            |                                           | 4.9e1 |
| 一丁点儿  |            |                                           | 4.2e1 |
|   三维    |            |                                           | 4.2e1 |
|   一头    |            |                                           | 3.7e1 |
|   百倍    |            |                                           | 2.4e1 |
|   半截    |            |                                           | 2.3e1 |
|  一小撮   |            |                                           | 1.8e1 |
|  大半天   |            |                                           | 1.0e1 |
|   几度    |            |                                           | 8.0e0 |
|   两手    | liǎng shǒu | two hands; dual tactics                   | 5.0e0 |
|   万年    |            |                                           | 3.0e0 |
|   万代    |            |                                           | 1.0e0 |

## Non-Predicate Adjective

| Character |  Pinyin   | Translation                                                       | Count |
| :-------: | :-------: | ----------------------------------------------------------------- | :---: |
|   所有    |  suǒyǒu   | All                                                               | 2.8e4 |
|    女     |    nǚ     | woman                                                             | 8.0e3 |
|   整个    |  zhěnggè  | Whole                                                             | 6.7e3 |
|   唯一    |   wéiyī   | Only                                                              | 5.7e3 |
|    男     |    nán    | Man                                                               | 5.5e3 |
|   真正    | zhēnzhèng | real                                                              | 4.5e3 |
|    哈     |           |                                                                   | 4.3e3 |
|    美     |    měi    | beautiful; pretty                                                 | 4.3e3 |
|    斯     |           |                                                                   | 3.1e3 |
|    阿     |           |                                                                   | 3.0e3 |
|    尼     |           |                                                                   | 2.8e3 |
|    中     |   zhōng   | middle; in                                                        | 2.7e3 |
|    副     |           |                                                                   | 2.4e3 |
|   超级    |  chāojí   | super                                                             | 2.3e3 |
|    非     |    fēi    | wrong                                                             | 1.9e3 |
|   同样    | tóng yàng | same                                                              | 1.9e3 |
|    亚     |           |                                                                   | 1.9e3 |
|    吉     |           |                                                                   | 1.7e3 |
|    巴     |           |                                                                   | 1.6e3 |
|    金     |    jīn    | gold                                                              | 1.6e3 |
|    洛     |           |                                                                   | 1.5e3 |
|    罗     |           |                                                                   | 1.4e3 |
|    总     |   zǒng    | always; consistently                                              | 1.1e3 |
|    奥     |           |                                                                   | 1.1e3 |
|    伊     |           |                                                                   | 9.8e2 |
|    德     |           |                                                                   | 9.6e2 |
|    萨     |           |                                                                   | 9.2e2 |
|    法     |    fǎ     | law; way; method; example; rule                                   | 9.0e2 |
|    原     |   yuán    | primary; original; former; raw; pardon; level                     | 9.0e2 |
|    西     |    xī     | west                                                              | 8.9e2 |
|    加     |    jiā    | add; increase; put in                                             | 8.5e2 |
|    意     |           |                                                                   | 8.5e2 |
|   全新    | quán xīn  | new; brand new                                                    | 8.3e2 |
|    日     |    rì     | date                                                              | 8.1e2 |
|   主要    |  zhǔyào   | main                                                              | 8.1e2 |
|   公共    | gōng gòng | public; common; community                                         | 8.0e2 |
|    欧     |           |                                                                   | 7.9e2 |
|    瑞     |           |                                                                   | 7.2e2 |
|    泰     |           |                                                                   | 7.1e2 |
|    南     |    nán    | south                                                             | 6.9e2 |
|   保安    |  bǎo ān   | security guard; public security; ensure safety                    | 6.8e2 |
|   原来    |  yuánlái  | Original; formerly                                                | 6.5e2 |
|    维     |           |                                                                   | 6.3e2 |
|   消防    | xiāofáng  | Fire control                                                      | 6.3e2 |
|    格     |           |                                                                   | 6.2e2 |
|    单     |    dān    | single; odd; unlined; thin; weak; only; alone                     | 6.1e2 |
|   一定    |  yídìng   | Certain                                                           | 6.1e2 |
|    克     |    kè     | gram                                                              | 6.1e2 |
|   非法    |           |                                                                   | 6.1e2 |
|   裸体    |           |                                                                   | 6.0e2 |
|   连环    |           |                                                                   | 5.8e2 |
|    丹     |           |                                                                   | 5.7e2 |
|    太     |    tài    | too                                                               | 5.7e2 |
|    母     |    mǔ     | mother; female                                                    | 5.6e2 |
|    印     |    yìn    | seal; stamp; mark; print; impress                                 | 5.4e2 |
|   后备    |           |                                                                   | 5.2e2 |
|    厄     |           |                                                                   | 5.1e2 |
|    菲     |           |                                                                   | 5.1e2 |
|  同一个   |           |                                                                   | 5.0e2 |
|    藏     |   cáng    | hide; conceal; store; lay by                                      | 4.9e2 |
|    苏     |           |                                                                   | 4.9e2 |
|    英     |           |                                                                   | 4.9e2 |
|   最终    | zuì zhōng | final; ultimate                                                   | 4.9e2 |
|    摩     |           |                                                                   | 4.7e2 |
|    塔     |    tǎ     | tower                                                             | 4.6e2 |
|   故意    |   gùyì    | deliberately                                                      | 4.5e2 |
|   业余    |   yèyú    | amateur                                                           | 4.4e2 |
|   临时    |  línshí   | temporary                                                         | 4.4e2 |
|    华     |           |                                                                   | 4.3e2 |
|   额外    |           |                                                                   | 4.3e2 |
|    兰     |           |                                                                   | 4.2e2 |
|   大型    |  dàxíng   | large                                                             | 4.2e2 |
|    芬     |           |                                                                   | 4.1e2 |
|   亲生    |           |                                                                   | 4.1e2 |
|    野     |    yě     | open space; field; wild; uncultivated; rude; rough; out of office | 4.0e2 |
|    贝     |           |                                                                   | 4.0e2 |
|    韩     |           |                                                                   | 3.9e2 |
|    鲁     |           |                                                                   | 3.9e2 |
|    卢     |           |                                                                   | 3.7e2 |
|   天生    |           |                                                                   | 3.6e2 |
|    俄     |           |                                                                   | 3.5e2 |
|   一流    |   yīliú   | First-class                                                       | 3.5e2 |
|   头号    |           |                                                                   | 3.4e2 |
|   私家    |           |                                                                   | 3.4e2 |
|   非常    | fēicháng  | very                                                              | 3.4e2 |
|    希     |           |                                                                   | 3.4e2 |
|    银     |    yín    | silver                                                            | 3.4e2 |
|   小型    | xiǎo xíng | small-size; small-scale                                           | 3.3e2 |
|   自动    |  zìdòng   | automatic                                                         | 3.3e2 |
|   共同    | gòngtóng  | common                                                            | 3.2e2 |
|   高速    |  gāo sù   | high speed                                                        | 3.2e2 |
|    纳     |           |                                                                   | 3.2e2 |
|    莫     |           |                                                                   | 3.2e2 |
|   隐形    |           |                                                                   | 3.1e2 |
|   首要    |           |                                                                   | 3.1e2 |
|   潜在    |           |                                                                   | 3.0e2 |
|   前任    |           |                                                                   | 3.0e2 |
|    朝     |   cháo    | towards                                                           | 3.0e2 |
|   日常    |  rìcháng  | daily                                                             | 3.0e2 |
|   特定    |  tèdìng   | given                                                             | 3.0e2 |

## Interjection

| Character | Pinyin | Translation        | Count |
| :-------: | :----: | ------------------ | :---: |
|    嘿     |        |                    | 4.1e4 |
|    嗯     |        |                    | 3.5e4 |
|    哦     |        |                    | 2.8e4 |
|    嗨     |        |                    | 2.5e4 |
|    噢     |        |                    | 1.3e4 |
|    喂     |        |                    | 3.6e3 |
|    啊     |   a    | auxiliary word; ah | 2.4e3 |
|    哎     |        |                    | 1.0e3 |
|    唉     |        |                    | 8.3e2 |
|    哼     |        |                    | 8.1e2 |
|   哎呀    |        |                    | 4.8e2 |
|    呦     |        |                    | 4.3e2 |
|    哟     |        |                    | 3.8e2 |
|    诶     |        |                    | 2.8e2 |
|   呵呵    |        |                    | 2.3e2 |
|    呵     |        |                    | 2.2e2 |
|   哎哟    |        |                    | 1.9e2 |
|  好家伙   |        |                    | 1.8e2 |
|   啊啊    |        |                    | 1.6e2 |
|    咦     |        |                    | 1.4e2 |
|    咳     |   ké   | cough              | 1.1e2 |
|    呸     |        |                    | 9.5e1 |
|   呜呼    |        |                    | 9.2e1 |
|    嗬     |        |                    | 6.8e1 |
|    嚯     |        |                    | 6.4e1 |
|   啊呀    |        |                    | 6.0e1 |
|    喏     |        |                    | 1.6e1 |
|    哩     |        |                    | 1.2e1 |
|   啊哟    |        |                    | 1.2e1 |
|    啧     |        |                    | 1.2e1 |
|   嗨哟    |        |                    | 1.0e1 |
|    乎     |        |                    | 2.0e0 |
|    噫     |        |                    | 2.0e0 |
|  布拉沃   |        |                    | 2.0e0 |

## ? Time Word Classifier

| Character |  Pinyin  | Translation | Count |
| :-------: | :------: | ----------- | :---: |
|    点     |   diǎn   | spot        | 4.3e4 |
|    天     |   tiān   | day         | 3.9e4 |
|    年     |   nián   | year        | 2.4e4 |
|    岁     |   suì    | year; age   | 1.2e4 |
|   分钟    | fēnzhōng | Minute      | 1.1e4 |
|    周     |   zhōu   | week        | 6.6e3 |
|    分     |          |             | 1.7e3 |
|   会儿    |          |             | 1.6e3 |
|    秒     |   miǎo   | seconds     | 1.5e3 |
|   辈子    |          |             | 1.0e3 |
|    夜     |    yè    | night       | 8.2e2 |
|    日     |    rì    | date        | 4.8e2 |
|    席     |          |             | 1.9e2 |
|   光年    |          |             | 8.9e1 |
|   阵子    |          |             | 7.8e1 |
|    宿     |          |             | 7.7e1 |
|    下     |          |             | 6.2e1 |
|    载     |          |             | 5.6e1 |
|    刻     |          |             | 4.5e1 |
|   秒钟    |          |             | 1.2e1 |
|    阵     |   zhèn   | front       | 9.0e0 |

## Place Name

| Character  |  Pinyin  | Translation | Count |
| :--------: | :------: | ----------- | :---: |
|    美国    |          |             | 1.2e4 |
|    纽约    |          |             | 4.6e3 |
|   洛杉矶   |          |             | 2.6e3 |
|    英国    |          |             | 2.4e3 |
|    法国    |          |             | 2.1e3 |
|    中国    | zhōngguó | China       | 2.0e3 |
|   意大利   |          |             | 1.8e3 |
|    日本    |          |             | 1.7e3 |
|   墨西哥   |          |             | 1.7e3 |
|   好莱坞   |          |             | 1.7e3 |
|    伦敦    |          |             | 1.6e3 |
|    德国    |          |             | 1.4e3 |
|   华盛顿   |          |             | 1.3e3 |
|    巴黎    |          |             | 1.3e3 |
|    罗马    |          |             | 1.2e3 |
|    加州    |          |             | 1.1e3 |
|    非洲    |          |             | 1.0e3 |
|   迈阿密   |          |             | 1.0e3 |
|    印度    |          |             | 9.8e2 |
|   加拿大   |          |             | 9.3e2 |
|    欧洲    |          |             | 9.1e2 |
|   芝加哥   |          |             | 8.9e2 |
|   西班牙   |          |             | 8.7e2 |
|    俄国    |          |             | 8.6e2 |
|   俄罗斯   |          |             | 8.4e2 |
|   爱尔兰   |          |             | 7.7e2 |
|   伊拉克   |          |             | 7.6e2 |
|    希腊    |          |             | 7.4e2 |
|    汉堡    |          |             | 7.0e2 |
|   苏格兰   |          |             | 6.9e2 |
|   波士顿   |          |             | 6.6e2 |
|   印第安   |          |             | 6.4e2 |
|    古巴    |          |             | 6.3e2 |
|    韩国    |          |             | 6.0e2 |
|   夏威夷   |          |             | 5.5e2 |
|    东京    |          |             | 5.3e2 |
|   曼哈顿   |          |             | 5.1e2 |
|    巴斯    |          |             | 5.1e2 |
|    埃及    |          |             | 5.0e2 |
|    柏林    |          |             | 4.9e2 |
|   旧金山   |          |             | 4.9e2 |
|    撒旦    |          |             | 4.8e2 |
|    苏联    |          |             | 4.8e2 |
|    费城    |          |             | 4.7e2 |
|  佛罗里达  |          |             | 4.6e2 |
|   百老汇   |          |             | 4.6e2 |
|    巴西    |          |             | 4.6e2 |
|    克鲁    |          |             | 4.4e2 |
|    亚洲    |          |             | 4.1e2 |
|   西雅图   |          |             | 4.1e2 |
|   新泽西   |          |             | 4.0e2 |
|    哈佛    |          |             | 3.9e2 |
|    德州    |          |             | 3.8e2 |
|    越南    |          |             | 3.8e2 |
|  布鲁克林  |          |             | 3.7e2 |
|    朝鲜    |          |             | 3.7e2 |
|    雷斯    |          |             | 3.6e2 |
|    荷兰    |          |             | 3.6e2 |
|   英格兰   |          |             | 3.5e2 |
|    阿曼    |          |             | 3.5e2 |
|   以色列   |          |             | 3.4e2 |
|    汉城    |          |             | 3.4e2 |
|   阿富汗   |          |             | 3.4e2 |
|    耶鲁    |          |             | 3.4e2 |
|    瑞士    |          |             | 3.3e2 |
|  维多利亚  |          |             | 3.2e2 |
|   莫斯科   |          |             | 3.0e2 |
| 加利福尼亚 |          |             | 2.9e2 |
|   阿拉伯   |          |             | 2.9e2 |
|  巴基斯坦  |          |             | 2.9e2 |
|  哥伦比亚  |          |             | 2.9e2 |
|   太平洋   |          |             | 2.8e2 |
|  圣地亚哥  |          |             | 2.7e2 |
|    赫尔    |          |             | 2.7e2 |
|  澳大利亚  |          |             | 2.7e2 |
|   底特律   |          |             | 2.5e2 |
|    波兰    |          |             | 2.5e2 |
|   达拉斯   |          |             | 2.5e2 |
| 阿姆斯特丹 |          |             | 2.5e2 |
|    比萨    |          |             | 2.4e2 |
|    巴库    |          |             | 2.4e2 |
|  亚特兰大  |          |             | 2.3e2 |
|    泰国    |          |             | 2.3e2 |
|    香港    |          |             | 2.3e2 |
|    丹佛    |          |             | 2.3e2 |
|   土耳其   |          |             | 2.3e2 |
|   布拉格   |          |             | 2.3e2 |
|   阿根廷   |          |             | 2.2e2 |
|    尼斯    |          |             | 2.2e2 |
|    巴马    |          |             | 2.2e2 |
|    瑞典    |          |             | 2.2e2 |
|  阿拉斯加  |          |             | 2.2e2 |
|    加里    |          |             | 2.1e2 |
|    波斯    |          |             | 2.0e2 |
|  新奥尔良  |          |             | 2.0e2 |
|   威尼斯   |          |             | 1.9e2 |
|    阿拉    |          |             | 1.9e2 |
|    美洲    |          |             | 1.9e2 |
|   麦迪逊   |          |             | 1.8e2 |
|    秘鲁    |          |             | 1.8e2 |

## Space Word

| Character |   Pinyin   | Translation                           | Count |
| :-------: | :--------: | ------------------------------------- | :---: |
|   一起    |    yìqǐ    | together                              | 2.3e4 |
|   身上    | shēn shàng | body; on one’s body                   | 7.2e3 |
|   现场    | xiànchǎng  | scene                                 | 4.9e3 |
|   家里    |   jiā lǐ   | In the home                           | 4.6e3 |
|   身边    | shēn biān  | at [by] one’s side                    | 3.7e3 |
|   路上    |  lù shàng  | on the road                           | 2.4e3 |
|   心里    |   xīn lǐ   | in the heart; at heart                | 1.8e3 |
|   手上    |            |                                       | 1.7e3 |
|   脸上    |            |                                       | 1.5e3 |
|   地上    |  dì shàng  | on the ground                         | 1.4e3 |
|   手里    |  shǒu lǐ   | in one’s hands                        | 1.4e3 |
|   街上    |            |                                       | 1.4e3 |
|   车上    | chē shàng  | in the car                            | 1.3e3 |
|   世上    |            |                                       | 1.2e3 |
|   城里    |  chéng lǐ  | inside the city; in town              | 1.2e3 |
|   当地    |   dāngdì   | Local                                 | 1.0e3 |
|   船上    |            |                                       | 1.0e3 |
|   网上    | wǎng shàng | online                                | 9.7e2 |
|   楼上    | lóu shàng  | upstairs                              | 9.5e2 |
|   太空    |  tàikōng   | Space                                 | 9.3e2 |
|   台上    | tái shàng  | on the stage                          | 9.0e2 |
|   嘴里    |            |                                       | 8.8e2 |
|   心中    | xīn zhōng  | in the heart; at heart; in mind       | 8.8e2 |
|   地下    |   dì xià   | underground; subterranean; secret     | 8.8e2 |
|   楼下    |  lóu xià   | downstairs                            | 8.4e2 |
|   门口    |  mén kǒu   | doorway                               | 8.4e2 |
|   屋里    |            |                                       | 8.1e2 |
|   体内    |            |                                       | 7.9e2 |
|   墙上    |            |                                       | 7.8e2 |
|   手中    |            |                                       | 7.6e2 |
|   南方    |  nán fāng  | south                                 | 7.4e2 |
|   空中    | kōng zhōng | in the air; in the sky                | 7.1e2 |
|   隔壁    |    gébì    | next door                             | 6.8e2 |
|   眼前    |  yǎn qián  | now; at the moment; before one’s eyes | 6.5e2 |
|   桌上    |            |                                       | 5.8e2 |
|   街头    |  jiē tóu   | street                                | 5.5e2 |
|   眼里    |   yǎn lǐ   | within one’s vision; in one’s eyes    | 5.3e2 |
|   幕后    |            |                                       | 5.0e2 |
|   深处    |  shēn chù  | deep; depths; recess; profundity      | 4.8e2 |
|   天上    | tiān shàng | the sky; heaven                       | 4.4e2 |
|   手下    |            |                                       | 4.4e2 |
|   海边    |  hǎi biān  | seaside                               | 4.4e2 |
|   边境    |  biānjìng  | border; frontier                      | 4.1e2 |
|   山上    |            |                                       | 3.7e2 |
|   路边    |  lù biān   | roadside; wayside                     | 3.6e2 |
|   眼中    |            |                                       | 3.6e2 |
|  市中心   |            |                                       | 3.6e2 |
|   北方    |  běifāng   | north                                 | 3.2e2 |
|   乡下    |            |                                       | 3.2e2 |
|   市区    |   shì qū   | downtown area; urban district         | 3.1e2 |
|   海上    |            |                                       | 3.1e2 |
|   国内    |  guó nèi   | domestic; internal                    | 2.9e2 |
|   窗外    |            |                                       | 2.9e2 |
|   门外    |            |                                       | 2.8e2 |
|   窗口    | chuāng kǒu | window; wicket                        | 2.8e2 |
|   途中    |  tú zhōng  | on the way to; en route               | 2.8e2 |
|   国外    |  guó wài   | foreign; oversea; abroad              | 2.7e2 |
|   前方    | qián fāng  | ahead; the front                      | 2.7e2 |
|   西方    |  xī fāng   | west                                  | 2.6e2 |
|   家中    |            |                                       | 2.5e2 |
|   湖边    |            |                                       | 2.4e2 |
|   身旁    |            |                                       | 2.4e2 |
|   水中    |            |                                       | 2.4e2 |
|   此地    |            |                                       | 2.4e2 |
|   河里    |            |                                       | 2.2e2 |
|   前线    |            |                                       | 2.0e2 |
|   树上    |            |                                       | 2.0e2 |
|   一块    |            |                                       | 2.0e2 |
|   场上    |            |                                       | 2.0e2 |
|   河边    |            |                                       | 2.0e2 |
|   郊区    |   jiāoqū   | Suburb                                | 1.9e2 |
|   东方    | dōng fāng  | east                                  | 1.9e2 |
|   机上    |            |                                       | 1.9e2 |
|   西北    |   xī běi   | northwest                             | 1.9e2 |
|   室内    |            |                                       | 1.8e2 |
|   海外    |  hǎi wài   | overseas; abroad                      | 1.8e2 |
|   门前    |            |                                       | 1.8e2 |
|   户外    |   hù wài   | outdoor                               | 1.8e2 |
|   上空    |            |                                       | 1.8e2 |
|   水下    |            |                                       | 1.7e2 |
|   水上    |            |                                       | 1.6e2 |
|   野外    |            |                                       | 1.6e2 |
|   心上    |            |                                       | 1.6e2 |
|   怀里    |            |                                       | 1.5e2 |
|   此处    |   cǐ chù   | here; this place                      | 1.5e2 |
|  一块儿   |  yí kuàir  | together                              | 1.5e2 |
|   西南    |   xī nán   | southwest                             | 1.5e2 |
|   海里    |            |                                       | 1.4e2 |
|   肩上    |            |                                       | 1.4e2 |
|   东北    |  dōng běi  | northeast                             | 1.4e2 |
|   远处    |  yuǎn chù  | distance; far away                    | 1.4e2 |
|   口中    |            |                                       | 1.4e2 |
|   耳边    |            |                                       | 1.3e2 |
|   东区    |            |                                       | 1.2e2 |
|   山里    |            |                                       | 1.2e2 |
|   胸前    |            |                                       | 1.2e2 |
|   高空    |            |                                       | 1.1e2 |
|   中场    |            |                                       | 1.1e2 |
|   岸边    |            |                                       | 1.1e2 |
|   心头    |            |                                       | 1.1e2 |

## ? Verb Classifier

| Character | Pinyin | Translation                              | Count |
| :-------: | :----: | ---------------------------------------- | :---: |
|    次     |        |                                          | 4.4e4 |
|    场     | chǎng  | site                                     | 1.1e4 |
|    回     |        |                                          | 6.6e3 |
|    步     |   bù   | step; stage; walk; foot                  | 4.0e3 |
|    遍     |  biàn  | Times                                    | 3.8e3 |
|    把     |        |                                          | 2.9e3 |
|    顿     |  dùn   | Meal                                     | 2.1e3 |
|    声     | shēng  | sound; voice; reputation; tone           | 2.0e3 |
|    架     |  jià   | frame; rack; shelf; stand                | 1.9e3 |
|    轮     |  lún   | wheel; ring; take turns                  | 1.8e3 |
|    层     |  céng  | layer                                    | 1.7e3 |
|    度     |   dù   | degree; limit                            | 1.7e3 |
|    道     |  dào   | road; way; path                          | 1.6e3 |
|    趟     |  tàng  | Trip                                     | 1.4e3 |
|    圈     |  quān  | circle                                   | 1.3e3 |
|    局     |        |                                          | 1.1e3 |
|    期     |   qī   | period; time; term; expect               | 9.3e2 |
|    盘     |        |                                          | 9.0e2 |
|    拳     |        |                                          | 5.4e2 |
|    任     |        |                                          | 3.9e2 |
|    通     |  tōng  | through; common; all; understand; expert | 3.0e2 |
|    番     |  fān   | Some                                     | 2.7e2 |
|    餐     |  cān   | food; meal; eat                          | 1.7e2 |
|    路     |   lù   | road                                     | 8.9e1 |
|    胎     |        |                                          | 7.3e1 |
|    茬     |        |                                          | 6.4e1 |
|    遭     |        |                                          | 8.0e0 |
|    和     |   hé   | and                                      | 4.0e0 |
|   人次    |        |                                          | 3.0e0 |
|   场次    |        |                                          | 3.0e0 |
|    巡     |        |                                          | 3.0e0 |
|   架次    |        |                                          | 2.0e0 |

## Adjective As Adverbial

| Character |   Pinyin   | Translation                                                   | Count |
| :-------: | :--------: | ------------------------------------------------------------- | :---: |
|   完全    |  wánquán   | completely                                                    | 1.1e4 |
|   确实    |   quèshí   | Exactly                                                       | 6.7e3 |
|    早     |    zǎo     | early                                                         | 5.8e3 |
|    难     |    nán     | hard; difficult                                               | 5.4e3 |
|    多     |    duō     | many; much; more                                              | 4.0e3 |
|   直接    |   zhíjiē   | direct                                                        | 3.9e3 |
|   突然    |   tūrán    | suddenly                                                      | 3.6e3 |
|   随便    |  suíbiàn   | casual                                                        | 2.8e3 |
|   努力    |    nǔlì    | Strive                                                        | 2.4e3 |
|    远     |    yuǎn    | far                                                           | 1.9e3 |
|   容易    |   róngyì   | easily                                                        | 1.5e3 |
|   仔细    |    zǐxì    | careful                                                       | 1.4e3 |
|   老实    |   lǎoshi   | honest                                                        | 1.3e3 |
|   抱歉    |  bàoqiàn   | feel sorry                                                    | 1.3e3 |
|    少     |    shǎo    | less                                                          | 1.3e3 |
|   显然    |  xiǎnrán   | Obviously                                                     | 1.3e3 |
|   彻底    |   chèdǐ    | thorough                                                      | 1.2e3 |
|   正式    |  zhèngshì  | formal                                                        | 9.7e2 |
|   小心    |  xiǎoxīn   | Look out                                                      | 9.4e2 |
|   冷静    |  lěngjìng  | calm down                                                     | 8.7e2 |
|   一般    |   yìbān    | commonly                                                      | 7.5e2 |
|   认真    |  rènzhēn   | earnest                                                       | 7.4e2 |
|   及时    |   jíshí    | timely                                                        | 5.2e2 |
|   成功    | chénggōng  | Success                                                       | 5.0e2 |
|    久     |    jiǔ     | long                                                          | 4.4e2 |
|   主动    |  zhǔdòng   | active                                                        | 4.3e2 |
|   明显    |  míngxiǎn  | obvious                                                       | 4.2e2 |
|   紧急    |   jǐnjí    | urgent                                                        | 4.2e2 |
|    混     |    hùn     | mix; confuse; pass off; muddle along; get along with somebody | 4.0e2 |
|   自由    |   zìyóu    | free                                                          | 4.0e2 |
|   秘密    |    mìmì    | Secret                                                        | 3.7e2 |
|   严重    |  yánzhòng  | serious                                                       | 3.7e2 |
|   准时    |  zhǔnshí   | on time                                                       | 3.6e2 |
|   随意    |   suíyì    | random; casual                                                | 3.4e2 |
|   公开    |  gōngkāi   | open                                                          | 3.4e2 |
|   专心    |  zhuānxīn  | Attentively                                                   | 3.3e2 |
|    易     |            |                                                               | 3.1e2 |
|    暗     |     àn     | dark                                                          | 3.1e2 |
|   安全    |   ānquán   | security                                                      | 3.1e2 |
|    长     |   cháng    | long; grow                                                    | 3.1e2 |
|   顺利    |   shùnlì   | smoothly                                                      | 3.0e2 |
|   迅速    |   xùnsù    | rapid                                                         | 3.0e2 |
|   严格    |   yángé    | strict                                                        | 2.9e2 |
|    轻     |    qīng    | light                                                         | 2.9e2 |
|   基本    |   jīběn    | basic                                                         | 2.8e2 |
|    高     |    gāo     | high                                                          | 2.7e2 |
|   集中    |  jízhōng   | focus                                                         | 2.6e2 |
|    亲     |    qīn     | dear; close; intimate; relative                               | 2.6e2 |
|   详细    |  xiángxì   | detailed                                                      | 2.6e2 |
|   精心    |            |                                                               | 2.6e2 |
|   全面    |  quánmiàn  | comprehensive                                                 | 2.5e2 |
|   疯狂    | fēngkuáng  | Insane                                                        | 2.4e2 |
|   充分    |  chōngfèn  | To the full                                                   | 2.3e2 |
|   意外    |   yìwài    | Accident                                                      | 2.3e2 |
|   耐心    |   nàixīn   | patience                                                      | 2.3e2 |
|   简单    |  jiǎndān   | simple                                                        | 2.3e2 |
|   不好    |            |                                                               | 2.2e2 |
|    暴     |            |                                                               | 2.1e2 |
|    巧     |    qiǎo    | opportunely; skilful; deceitful                               | 2.0e2 |
|   连续    |   liánxù   | serial                                                        | 2.0e2 |
|    慢     |    màn     | slow                                                          | 2.0e2 |
|   正常    | zhèngcháng | normal                                                        | 2.0e2 |
|   具体    |    jùtǐ    | specific                                                      | 1.9e2 |
|   一致    |   yízhì    | Agreement                                                     | 1.8e2 |
|    小     |    xiǎo    | Small                                                         | 1.8e2 |
|   偶然    |   ǒurán    | accidental                                                    | 1.8e2 |
|    急     |     jí     | fast; anxious; urgent; annoyed                                | 1.7e2 |
|   健康    |  jiànkāng  | Healthy                                                       | 1.6e2 |
|    假     |    jiǎ     | FALSE                                                         | 1.6e2 |
|   深入    |  shēn rù   | go deep into; thorough                                        | 1.6e2 |
|   强烈    |  qiángliè  | strong                                                        | 1.6e2 |
|   正确    |  zhèngquè  | Correct                                                       | 1.5e2 |
|   过分    |   guòfèn   | excessive                                                     | 1.5e2 |
|   积极    |    jījí    | positive                                                      | 1.5e2 |
|   独立    |    dúlì    | Independent                                                   | 1.5e2 |
|   用力    |            |                                                               | 1.5e2 |
|   轻松    |  qīngsōng  | Relaxed                                                       | 1.4e2 |
|   完美    |   wánměi   | perfect                                                       | 1.4e2 |
|   懦弱    |            |                                                               | 1.4e2 |
|   勉强    |            |                                                               | 1.4e2 |
|   不幸    |  bú xìng   | misfortune; unfortunat; unfortunately                         | 1.3e2 |
|    恶     |            |                                                               | 1.3e2 |
|   明确    |  míngquè   | To make clear                                                 | 1.3e2 |
|   平安    |  píng’ān   | sound and safe                                                | 1.3e2 |
|   热烈    |   rèliè    | warm                                                          | 1.3e2 |
|   用心    |  yòng xīn  | attentively; intention; diligently                            | 1.3e2 |
|    乐     |     lè     | happy; laugh; cheerful                                        | 1.2e2 |
|   严肃    |   yánsù    | serious                                                       | 1.2e2 |
|   安心    |            |                                                               | 1.1e2 |
|   热情    |   rèqíng   | Enthusiasm                                                    | 1.1e2 |
|   密切    |   mìqiè    | close                                                         | 1.1e2 |
|   坚决    |  jiānjué   | firm                                                          | 1.1e2 |
|    实     |            |                                                               | 1.1e2 |
|   公平    |  gōngpíng  | fair                                                          | 1.0e2 |
|   勇敢    |  yǒnggǎn   | Brave                                                         | 1.0e2 |
|    密     |     mì     | thick; secret; close; dense                                   | 9.9e1 |
|   真实    |  zhēnshí   | real                                                          | 9.8e1 |
|   紧张    |  jǐnzhāng  | Nervous                                                       | 9.8e1 |
|   诚实    |  chéngshí  | honest                                                        | 9.6e1 |
|   大胆    |   dà dǎn   | bold; daring; audacious; audacity                             | 9.5e1 |

## Onomatopoeia

| Character | Pinyin | Translation            | Count |
| :-------: | :----: | ---------------------- | :---: |
|    哦     |        |                        | 4.1e4 |
|    喔     |        |                        | 6.7e3 |
|    哇     |   wa   | wow                    | 2.6e3 |
|   哈哈    | hā hā  | ha-ha                  | 9.6e2 |
|    嘻     |        |                        | 6.4e2 |
|  哈哈哈   |        |                        | 4.2e2 |
|    呜     |        |                        | 4.2e2 |
|    砰     |        |                        | 3.4e2 |
|   呵呵    |        |                        | 2.9e2 |
|   咪咪    |        |                        | 2.7e2 |
|   嘿嘿    |        |                        | 2.4e2 |
|    嗒     |        |                        | 2.1e2 |
|    铃     |  líng  | bell                   | 2.0e2 |
|    刷     |  shuā  | brush; scrub; paste up | 1.6e2 |
|    咕     |        |                        | 1.5e2 |
|    嘣     |        |                        | 1.5e2 |
|    嘎     |        |                        | 1.4e2 |
|    喵     |        |                        | 1.3e2 |
|    哒     |        |                        | 1.3e2 |
|    轰     |        |                        | 1.2e2 |
|  嘿嘿嘿   |        |                        | 1.2e2 |
|   嗡嗡    |        |                        | 1.2e2 |
|    嘟     |        |                        | 1.1e2 |
|    啪     |        |                        | 1.0e2 |
|    呼     |        |                        | 9.9e1 |
|    噗     |        |                        | 9.9e1 |
|    丁     |        |                        | 9.6e1 |
|   叮当    |        |                        | 9.1e1 |
|   哇哇    |        |                        | 8.8e1 |
|    咔     |        |                        | 7.8e1 |
|   咯咯    |        |                        | 7.7e1 |
|   噢噢    |        |                        | 7.4e1 |
|   咕噜    |        |                        | 7.2e1 |
|   唧唧    |        |                        | 6.8e1 |
|    叽     |        |                        | 6.3e1 |
|    咚     |        |                        | 6.3e1 |
|   呼呼    |        |                        | 6.1e1 |
|    哄     |        |                        | 6.0e1 |
|    咩     |        |                        | 5.9e1 |
|   吱吱    |        |                        | 5.7e1 |
|    叭     |        |                        | 5.5e1 |
|    嘭     |        |                        | 5.5e1 |
|   咔嚓    |        |                        | 5.4e1 |
|   叮咚    |        |                        | 5.1e1 |
|   嘟嘟    |        |                        | 5.1e1 |
|    吱     |        |                        | 4.9e1 |
|   呼啦    |        |                        | 4.8e1 |
|    梆     |        |                        | 4.7e1 |
|    咝     |        |                        | 4.5e1 |
| 叽叽喳喳  |        |                        | 4.3e1 |
|   嘎嘎    |        |                        | 4.1e1 |
|    哞     |        |                        | 4.0e1 |
|    乓     |        |                        | 3.9e1 |
|   呜呜    |        |                        | 3.9e1 |
|    嘶     |        |                        | 3.8e1 |
|   咕咕    |        |                        | 3.6e1 |
|   呼噜    |        |                        | 3.5e1 |
|    哗     |        |                        | 3.3e1 |
|   啧啧    |        |                        | 3.2e1 |
|    嗖     |        |                        | 3.1e1 |
|   砰砰    |        |                        | 2.9e1 |
|   隆隆    |        |                        | 2.9e1 |
|   呀呀    |        |                        | 2.8e1 |
|   嘀嗒    |        |                        | 2.8e1 |
|   叽叽    |        |                        | 2.7e1 |
|   哒哒    |        |                        | 2.7e1 |
|   喃喃    |        |                        | 2.6e1 |
|   啪啪    |        |                        | 2.4e1 |
|   扑通    |        |                        | 2.4e1 |
|    轧     |        |                        | 2.3e1 |
|   嘶嘶    |        |                        | 2.2e1 |
|   当当    |        |                        | 2.2e1 |
|    铛     |        |                        | 2.2e1 |
|   沙沙    |        |                        | 2.0e1 |
|   轰轰    |        |                        | 2.0e1 |
|    啧     |        |                        | 1.9e1 |
|   喀嚓    |        |                        | 1.8e1 |
|   嘀嘀    |        |                        | 1.8e1 |
|   嘭嘭    |        |                        | 1.8e1 |
|   咚咚    |        |                        | 1.7e1 |
|   怦怦    |        |                        | 1.5e1 |
|   咯吱    |        |                        | 1.4e1 |
|    哧     |        |                        | 1.4e1 |
| 叮叮当当  |        |                        | 1.3e1 |
|   哇啦    |        |                        | 1.3e1 |
|    嘤     |        |                        | 1.3e1 |
|    噌     |        |                        | 1.3e1 |
|   噼啪    |        |                        | 1.3e1 |
| 叽里呱啦  |        |                        | 1.2e1 |
|   咿呀    |        |                        | 1.2e1 |
|    哐     |        |                        | 1.2e1 |
|    喀     |        |                        | 1.2e1 |
|   刷刷    |        |                        | 1.1e1 |
|   哗啦    |        |                        | 1.1e1 |
| 唧唧喳喳  |        |                        | 1.1e1 |
|    嚓     |        |                        | 1.1e1 |
|   轰隆    |        |                        | 1.1e1 |
|    嗡     |        |                        | 1.0e1 |
|   潺潺    |        |                        | 1.0e1 |
|   吧哒    |        |                        | 9.0e0 |

## Suffix

| Character | Pinyin | Translation                                    | Count |
| :-------: | :----: | ---------------------------------------------- | :---: |
|    们     |        |                                                | 4.0e4 |
|    者     |        |                                                | 1.1e4 |
|    边     |  biān  | side                                           | 2.0e3 |
|    式     |  shì   | type; style; pattern; form; ceremony; formula  | 1.7e3 |
|    型     |  xíng  | mould; model; type; pattern                    | 1.3e3 |
|    儿     |        |                                                | 1.1e3 |
|    界     |  jiè   | boundary; scope; extent; kingdom; group; bound | 2.8e2 |
|    性     |        |                                                | 2.2e2 |
|    症     |        |                                                | 2.0e2 |
|    率     |        |                                                | 2.0e2 |
|    堆     |  duī   | heap                                           | 1.7e2 |
|    制     |        |                                                | 1.6e2 |
|    化     |        |                                                | 1.6e2 |
|    业     |        |                                                | 1.0e2 |
|    热     |   rè   | heat                                           | 7.0e1 |
|    仪     |        |                                                | 5.3e1 |
|    论     |        |                                                | 3.9e1 |
|    乎     |        |                                                | 9.0e0 |
|    头     |        |                                                | 4.0e0 |

## Adjective With Nominal Function

| Character |  Pinyin   | Translation                    | Count |
| :-------: | :-------: | ------------------------------ | :---: |
|   安全    |  ānquán   | security                       | 7.5e3 |
|   麻烦    |   máfan   | trouble                        | 4.9e3 |
|   抱歉    |  bàoqiàn  | feel sorry                     | 2.9e3 |
|   快乐    |  kuàilè   | happy                          | 2.6e3 |
|   努力    |   nǔlì    | Strive                         | 2.3e3 |
|   危险    |  wēixiǎn  | danger                         | 2.2e3 |
|   痛苦    |  tòngkǔ   | Pain                           | 2.0e3 |
|   骄傲    |  jiāo’ào  | Proud                          | 1.3e3 |
|   恐惧    |           |                                | 1.2e3 |
|   成功    | chénggōng | Success                        | 1.2e3 |
|   困难    |  kùnnán   | difficulty                     | 1.0e3 |
|   自由    |   zìyóu   | free                           | 8.4e2 |
|   礼貌    |   lǐmào   | politeness                     | 6.4e2 |
|   邪恶    |           |                                | 6.2e2 |
|   黑暗    |  hēi àn   | dark; darkness; murk           | 6.2e2 |
|   幸福    |  xìngfú   | happiness                      | 5.7e2 |
|   冲动    | chōngdòng | impulse                        | 5.6e2 |
|   惊喜    |  jīng xǐ  | surprise; pleasantly surprised | 5.4e2 |
|   健康    | jiànkāng  | Healthy                        | 5.3e2 |
|   意外    |   yìwài   | Accident                       | 5.1e2 |
|   矛盾    |  máodùn   | contradiction                  | 5.1e2 |
|   热情    |  rèqíng   | Enthusiasm                     | 5.0e2 |
|   必要    |   bìyào   | necessary                      | 4.7e2 |
|   烦恼    |           |                                | 4.5e2 |
|   自信    |   zìxìn   | self-confidence                | 4.3e2 |
|   尴尬    |           |                                | 4.3e2 |
|   卫生    | wèi shēng | hygiene; health; sanitation    | 4.2e2 |
|   遗憾    |   yíhàn   | regret; pity                   | 3.9e2 |
|   沉默    |  chénmò   | silent                         | 3.8e2 |
|   温暖    |  wēnnuǎn  | warm                           | 3.6e2 |
|   荣耀    |           |                                | 3.6e2 |
|   恐慌    |           |                                | 3.4e2 |
|   稳定    |  wěndìng  | Stable                         | 3.4e2 |
|   混乱    |  hùnluàn  | confusion                      | 3.3e2 |
|    辣     |    là     | hot; spicy                     | 3.3e2 |
|   疼痛    | téng tòng | pain; ache; soreness           | 3.3e2 |
|   不安    |   bù’ān   | Uneasy                         | 3.0e2 |
|   失望    |  shīwàng  | Disappointment                 | 2.9e2 |
|   平衡    | pínghéng  | balance                        | 2.7e2 |
|   悲哀    |           |                                | 2.6e2 |
|    苦     |    kǔ     | bitter                         | 2.6e2 |
|   忠诚    |           |                                | 2.6e2 |
|   困惑    |           |                                | 2.4e2 |
|    傻     |    shǎ    | silly                          | 2.4e2 |
|   一致    |   yízhì   | Agreement                      | 2.4e2 |
|   耐心    |  nàixīn   | patience                       | 2.1e2 |
|   腐败    |           |                                | 2.1e2 |
|   错乱    |           |                                | 1.9e2 |
|   孤独    |   gūdú    | lonely                         | 1.9e2 |
|   狂热    |           |                                | 1.9e2 |
|   惊讶    |           |                                | 1.9e2 |
|   悲伤    | bēi shāng | sad; sorrowful                 | 1.8e2 |
|   冷静    | lěngjìng  | calm down                      | 1.8e2 |
|   平安    |  píng’ān  | sound and safe                 | 1.7e2 |
|   焦虑    |           |                                | 1.7e2 |
|   安宁    |           |                                | 1.6e2 |
|   清白    |           |                                | 1.6e2 |
|   愧疚    |           |                                | 1.6e2 |
|   欢乐    |  huānlè   | Happy                          | 1.5e2 |
|   不满    |  bù mǎn   | dissatisfied                   | 1.5e2 |
|   明白    |  míngbai  | clear                          | 1.5e2 |
|   沮丧    |           |                                | 1.4e2 |
|   不足    |   bùzú    | insufficient                   | 1.4e2 |
|   浪漫    |  làngmàn  | romantic                       | 1.4e2 |
|   愤怒    |   fènnù   | anger                          | 1.4e2 |
|   民主    |  mínzhǔ   | democratic                     | 1.2e2 |
|   内疚    |           |                                | 1.2e2 |
|   悲痛    |           |                                | 1.2e2 |
|   团结    |  tuánjié  | Unite                          | 1.2e2 |
|   肃静    |           |                                | 1.2e2 |
|   刻薄    |           |                                | 1.2e2 |
|   阴险    |           |                                | 1.1e2 |
|   喜悦    |           |                                | 1.1e2 |
|   迷惑    |           |                                | 1.0e2 |
|   荣幸    |           |                                | 1.0e2 |
|   寂寞    |           |                                | 9.5e1 |
|   镇静    |           |                                | 9.5e1 |
|   默契    |           |                                | 9.4e1 |
|   忧伤    |           |                                | 8.9e1 |
|   无知    |           |                                | 8.5e1 |
|   公道    |           |                                | 8.4e1 |
|   孤单    |           |                                | 8.4e1 |
|   怪异    |           |                                | 8.3e1 |
|   偏执    |           |                                | 8.2e1 |
|   自私    |           |                                | 8.0e1 |
|   宁静    | níng jìng | peaceful; tranquil; quiet      | 7.9e1 |
|   安定    |           |                                | 7.9e1 |
|   羞辱    |           |                                | 7.7e1 |
|   无助    |           |                                | 7.5e1 |
|   苦恼    |           |                                | 7.2e1 |
|   幽默    |   yōumò   | Humor                          | 7.1e1 |
|   安慰    |   ānwèi   | comfort                        | 7.0e1 |
|   方便    | fāngbiàn  | convenient                     | 6.8e1 |
|   伤感    |           |                                | 6.7e1 |
|   哀伤    |           |                                | 6.5e1 |
|   俗气    |           |                                | 6.4e1 |
|   厉害    |   lìhai   | Fierce                         | 6.4e1 |
|   累赘    |           |                                | 6.3e1 |
|   贫穷    |           |                                | 6.3e1 |
|   残忍    |           |                                | 6.2e1 |

## Fixed Expressions

| Character |     Pinyin     | Translation                      | Count |
| :-------: | :------------: | -------------------------------- | :---: |
|  事实上   |  shìshí shàng  | in fact; actually                | 5.5e3 |
|  差不多   |    chàbuduō    | almost; nearly                   | 3.3e3 |
|  有意思   |    yǒuyìsi     | interesting                      | 3.0e3 |
| 不可思议  |    bùkěsīyì    | incredible                       | 1.6e3 |
| 不管怎样  | bùguǎn zěnyàng | one way or another               | 1.3e3 |
|   可不    |      kěbù      | may not                          | 1.2e3 |
| 无论如何  |   wúlùn rúhé   | anyway                           | 1.2e3 |
|  受不了   |  shòu bùliǎo   | can't stand it                   | 1.2e3 |
| 毫无疑问  |  háo wú yíwèn  | no doubt                         | 8.9e2 |
| 所作所为  | suǒzuò suǒ wéi | do                               | 5.9e2 |
|  用不着   |  yòng bù zháo  | no need; have no use for         | 5.6e2 |
| 一模一样  |   yīmúyīyàng   | exactly the same                 | 5.3e2 |
| 有史以来  |                |                                  | 4.4e2 |
| 乱七八糟  |                |                                  | 3.8e2 |
| 迫不及待  |                |                                  | 3.7e2 |
| 独一无二  |                |                                  | 3.5e2 |
|  性骚扰   |                |                                  | 3.3e2 |
|  面对面   | miàn duì miàn  | face to face; surface-to-surface | 2.9e2 |
|   您好    |                |                                  | 2.7e2 |
| 除此之外  |                |                                  | 2.5e2 |
| 显而易见  |                |                                  | 2.4e2 |
| 此时此刻  |                |                                  | 2.3e2 |
| 一塌糊涂  |                |                                  | 2.3e2 |
| 各种各样  |                |                                  | 2.2e2 |
|  不得了   |    búdéliǎo    | Very                             | 2.2e2 |
| 大惊小怪  |                |                                  | 2.2e2 |
| 至关重要  |                |                                  | 2.2e2 |
| 莫名其妙  |                |                                  | 2.0e2 |
| 好不容易  |                |                                  | 2.0e2 |
| 偷偷摸摸  |                |                                  | 1.8e2 |
| 理所当然  |                |                                  | 1.8e2 |
| 无处不在  |                |                                  | 1.8e2 |
| 梦寐以求  |                |                                  | 1.7e2 |
| 尽管如此  |                |                                  | 1.7e2 |
| 诸如此类  |                |                                  | 1.7e2 |
| 无缘无故  |                |                                  | 1.6e2 |
| 激动人心  |                |                                  | 1.6e2 |
| 轻而易举  |                |                                  | 1.6e2 |
| 不择手段  |                |                                  | 1.6e2 |
| 百分之百  |                |                                  | 1.6e2 |
| 梦想成真  |                |                                  | 1.6e2 |
| 从头到尾  |                |                                  | 1.5e2 |
| 迄今为止  |                |                                  | 1.4e2 |
| 彻头彻尾  |                |                                  | 1.4e2 |
| 一清二楚  |                |                                  | 1.4e2 |
| 情不自禁  |                |                                  | 1.4e2 |
| 鬼鬼祟祟  |                |                                  | 1.4e2 |
| 一举一动  |                |                                  | 1.3e2 |
| 想方设法  |                |                                  | 1.3e2 |
| 指手画脚  |                |                                  | 1.3e2 |
| 每时每刻  |                |                                  | 1.3e2 |
| 世界大战  |                |                                  | 1.2e2 |
| 自言自语  |  zì yán zì yǔ  | soliloquize; talk to oneself     | 1.2e2 |
| 鸡皮疙瘩  |                |                                  | 1.2e2 |
| 不顾一切  |                |                                  | 1.2e2 |
| 全心全意  |                |                                  | 1.2e2 |
|  团团转   |                |                                  | 1.2e2 |
| 一天到晚  |                |                                  | 1.1e2 |
| 无时无刻  |                |                                  | 1.1e2 |
|  强有力   |                |                                  | 1.1e2 |
| 愤世嫉俗  |                |                                  | 1.1e2 |
| 完美无缺  |                |                                  | 1.1e2 |
| 毫不犹豫  |                |                                  | 1.1e2 |
| 一席之地  |                |                                  | 1.1e2 |
| 筋疲力尽  |                |                                  | 1.1e2 |
| 自然而然  |                |                                  | 1.1e2 |
|  一连串   |                |                                  | 1.1e2 |
| 不省人事  |                |                                  | 1.0e2 |
|  说到底   |                |                                  | 9.9e1 |
| 小心翼翼  |                |                                  | 9.8e1 |
| 走投无路  |                |                                  | 9.7e1 |
| 种族歧视  |                |                                  | 9.4e1 |
| 不仅如此  |                |                                  | 9.3e1 |
| 十字路口  |                |                                  | 9.3e1 |
| 精彩绝伦  |                |                                  | 9.1e1 |
| 正当防卫  |                |                                  | 9.0e1 |
| 感情用事  |                |                                  | 8.8e1 |
| 不知不觉  |                |                                  | 8.5e1 |
| 光天化日  |                |                                  | 8.5e1 |
| 恰到好处  |                |                                  | 8.5e1 |
| 无稽之谈  |                |                                  | 8.5e1 |
| 光明正大  |                |                                  | 8.4e1 |
| 甜言蜜语  |                |                                  | 8.3e1 |
| 从此以后  |                |                                  | 8.2e1 |
| 蛛丝马迹  |                |                                  | 8.2e1 |
| 中产阶级  |                |                                  | 8.1e1 |
| 无名小卒  |                |                                  | 8.1e1 |
| 天衣无缝  |                |                                  | 8.0e1 |
| 军事基地  |                |                                  | 7.9e1 |
| 无懈可击  |                |                                  | 7.9e1 |
| 深思熟虑  |                |                                  | 7.9e1 |
| 罪魁祸首  |                |                                  | 7.7e1 |
| 不可收拾  |                |                                  | 7.6e1 |
|  依我看   |                |                                  | 7.6e1 |
| 死路一条  |                |                                  | 7.6e1 |
| 光彩照人  |                |                                  | 7.5e1 |
| 合情合理  |                |                                  | 7.5e1 |
| 随时随地  |                |                                  | 7.5e1 |
| 一臂之力  |                |                                  | 7.4e1 |
| 无影无踪  |                |                                  | 7.4e1 |

## Other Proper Noun

| Character  |    Pinyin    | Translation                                     | Count |
| :--------: | :----------: | ----------------------------------------------- | :---: |
|    英语    |   yīng yǔ    | English                                         | 1.2e3 |
|    法语    |    fǎ yǔ     | French language                                 | 8.3e2 |
|  西班牙语  | xī bān yá yǔ | Spanish language                                | 7.4e2 |
|    犹太    |              |                                                 | 7.0e2 |
|   沃尔特   |              |                                                 | 5.0e2 |
|    哈罗    |              |                                                 | 4.9e2 |
|   奥斯卡   |              |                                                 | 4.1e2 |
|   探索者   |              |                                                 | 3.9e2 |
|    拉丁    |              |                                                 | 3.7e2 |
|    梅林    |              |                                                 | 3.5e2 |
|   穆斯林   |              |                                                 | 3.2e2 |
|    福特    |              |                                                 | 3.0e2 |
|    博客    |    bó kè     | blog                                            | 2.9e2 |
|    英文    |   yīng wén   | English                                         | 2.9e2 |
|    德语    |              |                                                 | 2.8e2 |
|    劳拉    |              |                                                 | 2.7e2 |
|    基督    |              |                                                 | 2.6e2 |
|    道奇    |              |                                                 | 2.4e2 |
|    俄语    |              |                                                 | 2.4e2 |
|   华尔兹   |              |                                                 | 2.3e2 |
|   天主教   |              |                                                 | 2.3e2 |
|   基督教   |  jī dū jiào  | Christianity; the Christian religion; Christian | 2.3e2 |
|    柯达    |              |                                                 | 2.0e2 |
|    飞龙    |              |                                                 | 2.0e2 |
|    海选    |              |                                                 | 1.9e2 |
|    林肯    |              |                                                 | 1.6e2 |
|    麻省    |              |                                                 | 1.6e2 |
|    国安    |              |                                                 | 1.6e2 |
|    可乐    |    kě lè     | coke; cola                                      | 1.4e2 |
|    中文    |   zhōngwén   | Chinese                                         | 1.4e2 |
|  葡萄牙语  |              |                                                 | 1.3e2 |
|    日语    |    rì yǔ     | Japanese language                               | 1.3e2 |
|    腾达    |              |                                                 | 1.3e2 |
|  墨西哥人  |              |                                                 | 1.3e2 |
|    贝尔    |              |                                                 | 1.3e2 |
|   迪斯尼   |              |                                                 | 1.3e2 |
|    杜克    |              |                                                 | 1.3e2 |
|   三明治   | sān míng zhì | sandwich                                        | 1.2e2 |
| 亚美尼亚人 |              |                                                 | 1.2e2 |
|    奔驰    |              |                                                 | 1.2e2 |
|   犹太教   |              |                                                 | 1.1e2 |
|   希伯来   |              |                                                 | 1.1e2 |
|    格力    |              |                                                 | 1.0e2 |
|   麦当劳   |              |                                                 | 1.0e2 |
|    华纳    |              |                                                 | 1.0e2 |
|    宝马    |              |                                                 | 1.0e2 |
|  卡迪拉克  |              |                                                 | 1.0e2 |
|   拉丁文   |              |                                                 | 9.7e1 |
|    土著    |              |                                                 | 9.6e1 |
|   希腊人   |              |                                                 | 9.5e1 |
|  奥林匹克  |              |                                                 | 9.3e1 |
|   法拉利   |              |                                                 | 9.3e1 |
|   星巴克   |              |                                                 | 9.2e1 |
|    环球    |              |                                                 | 8.9e1 |
|  帕特里克  |              |                                                 | 8.5e1 |
|   美国人   |              |                                                 | 8.4e1 |
|    东东    |              |                                                 | 8.3e1 |
|    哈勃    |              |                                                 | 7.7e1 |
|    大韩    |              |                                                 | 7.7e1 |
|   乌托邦   |              |                                                 | 7.5e1 |
|    波波    |              |                                                 | 7.5e1 |
|    夏普    |              |                                                 | 7.4e1 |
|    纳西    |              |                                                 | 7.1e1 |
|  诺贝尔奖  |              |                                                 | 7.0e1 |
|     宏     |              |                                                 | 6.7e1 |
|    普尔    |              |                                                 | 6.6e1 |
| 泰坦尼克号 |              |                                                 | 6.6e1 |
|   塔利班   |              |                                                 | 6.5e1 |
|   阿尔法   |              |                                                 | 6.5e1 |
|    多利    |              |                                                 | 6.4e1 |
|   法西斯   |              |                                                 | 6.2e1 |
|    天马    |              |                                                 | 6.1e1 |
| 波多黎各人 |              |                                                 | 6.0e1 |
|  奥斯卡奖  |              |                                                 | 5.9e1 |
|    斯安    |              |                                                 | 5.9e1 |
|    索尼    |              |                                                 | 5.9e1 |
| 萨尔瓦多人 |              |                                                 | 5.9e1 |
|    通用    |   tōngyòng   | currency                                        | 5.9e1 |
|    海尔    |              |                                                 | 5.8e1 |
|    伊利    |              |                                                 | 5.6e1 |
|   伊斯兰   |              |                                                 | 5.6e1 |
|    大众    |   dà zhòng   | public; the masses; people                      | 5.6e1 |
|   来复枪   |              |                                                 | 5.6e1 |
|   沃尔玛   |              |                                                 | 5.6e1 |
|    赛特    |              |                                                 | 5.6e1 |
|    幻像    |              |                                                 | 5.5e1 |
|    卡利    |              |                                                 | 5.3e1 |
|    方舟    |              |                                                 | 5.3e1 |
|    德赛    |              |                                                 | 5.2e1 |
|    灵光    |              |                                                 | 5.2e1 |
|  阿拉伯语  |              |                                                 | 5.2e1 |
|    神龙    |              |                                                 | 5.1e1 |
|   维克斯   |              |                                                 | 5.1e1 |
|    沙林    |              |                                                 | 5.0e1 |
|   海地人   |              |                                                 | 5.0e1 |
|    联想    |  liánxiǎng   | association                                     | 5.0e1 |
|  伊斯兰教  |              |                                                 | 4.8e1 |
|  可口可乐  |              |                                                 | 4.8e1 |
|    夏利    |              |                                                 | 4.8e1 |
|    红牛    |              |                                                 | 4.8e1 |

## Descriptive

| Character |  Pinyin   | Translation                | Count |
| :-------: | :-------: | -------------------------- | :---: |
|   正好    | zhènghǎo  | Just right                 | 2.1e3 |
|   最佳    |  zuì jiā  | optimal; the best; optimum | 1.3e3 |
|  小小的   |           |                            | 6.0e2 |
|   无比    |           |                            | 5.1e2 |
|   永恒    |           |                            | 4.3e2 |
|   小小    |           |                            | 3.9e2 |
|   十足    |   shízú   | 100 percent                | 3.9e2 |
|   非凡    |           |                            | 3.1e2 |
|   依旧    |   yījiù   | still                      | 2.6e2 |
|  活生生   |           |                            | 2.5e2 |
|   好好    |  hǎo hǎo  | really good; really nice   | 2.2e2 |
|   血腥    |           |                            | 2.1e2 |
|   冰冷    |           |                            | 1.9e2 |
|   透顶    |           |                            | 1.9e2 |
|   闪闪    |           |                            | 1.8e2 |
|   满满    |           |                            | 1.7e2 |
|   重重    |           |                            | 1.7e2 |
|   轻轻    |           |                            | 1.7e2 |
|   半死    |           |                            | 1.4e2 |
|   痴呆    |           |                            | 1.3e2 |
|   火热    |           |                            | 1.3e2 |
|   漫漫    |           |                            | 1.3e2 |
|   忽悠    |           |                            | 1.2e2 |
|   深深    | shēn shēn | deeply; profoundly; deep   | 1.2e2 |
|   无穷    |           |                            | 1.2e2 |
|  醉醺醺   |           |                            | 1.2e2 |
|   安然    |           |                            | 1.1e2 |
|   漆黑    |           |                            | 1.1e2 |
|  长长的   |           |                            | 1.1e2 |
|   飞快    |           |                            | 1.0e2 |
| 实实在在  |           |                            | 1.0e2 |
| 老老实实  |           |                            | 1.0e2 |
|  傻乎乎   |           |                            | 9.7e1 |
|  毛茸茸   |           |                            | 9.6e1 |
|  眼睁睁   |           |                            | 9.6e1 |
|   急速    |           |                            | 8.7e1 |
| 清清楚楚  |           |                            | 8.5e1 |
|  乱糟糟   |           |                            | 8.3e1 |
|   无瑕    |           |                            | 8.1e1 |
|   不祥    |           |                            | 7.9e1 |
|   熊熊    |           |                            | 7.6e1 |
|   不朽    |           |                            | 7.4e1 |
| 疯疯癫癫  |           |                            | 7.4e1 |
|   短短    |           |                            | 7.3e1 |
|  赤裸裸   |           |                            | 7.2e1 |
|  高高的   |           |                            | 7.1e1 |
|   快捷    |           |                            | 6.2e1 |
|  孤零零   |           |                            | 6.1e1 |
| 干干净净  |           |                            | 6.1e1 |
|   茫茫    |           |                            | 6.1e1 |
|  短短的   |           |                            | 5.8e1 |
| 随随便便  |           |                            | 5.8e1 |
|   优良    | yōu liáng | fine; good; excellent      | 5.5e1 |
|   光光    |           |                            | 5.5e1 |
|   笔直    |           |                            | 5.5e1 |
|  假惺惺   |           |                            | 5.3e1 |
|   冲天    |           |                            | 5.3e1 |
|   平平    |           |                            | 5.3e1 |
|   匆匆    |           |                            | 5.1e1 |
| 哭哭啼啼  |           |                            | 5.1e1 |
|   汪汪    |           |                            | 5.1e1 |
|  空荡荡   |           |                            | 5.0e1 |
|   空空    |           |                            | 4.9e1 |
| 舒舒服服  |           |                            | 4.9e1 |
|   无恙    |           |                            | 4.7e1 |
| 辛辛苦苦  |           |                            | 4.7e1 |
|   舒缓    |           |                            | 4.6e1 |
|  血淋淋   |           |                            | 4.6e1 |
|   冰凉    |           |                            | 4.5e1 |
|   垂危    |           |                            | 4.5e1 |
|   多变    |           |                            | 4.4e1 |
|   无边    |  wú biān  | boundless                  | 4.4e1 |
|  死死的   |           |                            | 4.4e1 |
|   滚滚    |           |                            | 4.3e1 |
|  热腾腾   |           |                            | 4.3e1 |
|   多多    |           |                            | 4.2e1 |
|   灰暗    |           |                            | 4.2e1 |
|   不凡    |           |                            | 4.1e1 |
|   滚烫    |           |                            | 4.1e1 |
|  静静地   |           |                            | 4.1e1 |
|  静静的   |           |                            | 4.1e1 |
| 普普通通  |           |                            | 4.0e1 |
|   斑斑    |           |                            | 3.9e1 |
| 安安静静  |           |                            | 3.8e1 |
|   累累    |           |                            | 3.8e1 |
|  飘飘然   |           |                            | 3.8e1 |
|   区区    |           |                            | 3.7e1 |
| 简简单单  |           |                            | 3.7e1 |
|  亮晶晶   |           |                            | 3.6e1 |
|   奔放    |           |                            | 3.6e1 |
|   久远    |           |                            | 3.5e1 |
|   沉寂    |           |                            | 3.5e1 |
|  臭烘烘   |           |                            | 3.5e1 |
|  悄悄的   |           |                            | 3.4e1 |
|  湿漉漉   |           |                            | 3.4e1 |
|   特异    |           |                            | 3.4e1 |
| 马马虎虎  |           |                            | 3.4e1 |
|   依然    |   yīrán   | still                      | 3.3e1 |
|  冷冰冰   |           |                            | 3.2e1 |
| 漂漂亮亮  |           |                            | 3.2e1 |

## Time Word Morpheme

| Character | Pinyin | Translation                                                    | Count |
| :-------: | :----: | -------------------------------------------------------------- | :---: |
|    晚     |  wǎn   | late                                                           | 5.4e3 |
|    早     |  zǎo   | early                                                          | 2.0e3 |
|    夜     |   yè   | night                                                          | 2.0e3 |
|    今     |        |                                                                | 1.4e3 |
|    现     |        |                                                                | 6.9e2 |
|    清     |  qīng  | clear; quiet; distinct; thoroughly; the Qing Dynasty           | 5.3e2 |
|    朝     |  cháo  | towards                                                        | 3.5e2 |
|    夏     |        |                                                                | 3.5e2 |
|    汉     |        |                                                                | 3.3e2 |
|    明     |        |                                                                | 3.0e2 |
|    古     |   gǔ   | ancient; old                                                   | 2.6e2 |
|    唐     |        |                                                                | 2.5e2 |
|    春     |        |                                                                | 2.4e2 |
|    冬     |        |                                                                | 1.6e2 |
|    昔     |        |                                                                | 1.5e2 |
|    昏     |  hūn   | faint; lose consciousness; dusk; twilight; dull; muddle-headed | 1.3e2 |
|    楚     |        |                                                                | 1.3e2 |
|    秋     |        |                                                                | 1.3e2 |
|    午     |        |                                                                | 1.0e2 |
|    夕     |        |                                                                | 9.2e1 |
|    晨     |        |                                                                | 9.2e1 |
|    宵     |        |                                                                | 8.0e1 |
|    商     |        |                                                                | 7.0e1 |
|    宋     |        |                                                                | 6.7e1 |
|    旦     |        |                                                                | 2.5e1 |
|    暮     |        |                                                                | 2.4e1 |
|    泰     |        |                                                                | 2.4e1 |
|    秦     |        |                                                                | 2.3e1 |
|    魏     |        |                                                                | 2.3e1 |
|    昨     |        |                                                                | 1.6e1 |
|    元     |  yuán  | element; Yuan                                                  | 1.5e1 |
|    昼     |        |                                                                | 1.2e1 |
|    晓     |        |                                                                | 1.1e1 |
|    齐     |   qí   | together; uniform; neat; be level with                         | 1.0e1 |
|    吴     |        |                                                                | 7.0e0 |
|    晋     |        |                                                                | 4.0e0 |
|    辽     |        |                                                                | 4.0e0 |
|    梁     |        |                                                                | 2.0e0 |
|    周     |  zhōu  | week                                                           | 1.0e0 |
|    晌     |        |                                                                | 1.0e0 |
|    暑     |        |                                                                | 1.0e0 |
|    殷     |        |                                                                | 1.0e0 |
|    郑     |        |                                                                | 1.0e0 |
|    金     |  jīn   | gold                                                           | 1.0e0 |
|    隋     |        |                                                                | 1.0e0 |

## Pronoun Morpheme

| Character | Pinyin | Translation     | Count |
| :-------: | :----: | --------------- | :---: |
|    尔     |   ěr   | you             | 2.4e3 |
|    斯     |   sī   | such; this      | 1.7e3 |
|    兹     |   zī   | herewith        | 7.2e2 |
|    夫     |   fū   | man; husband    | 1.7e2 |
|    伊     |   yī   | he; she         | 9.1e1 |
|    汝     |   rǔ   | thou; you       | 3.3e1 |
|    胡     |   hú   | why             | 1.6e1 |
|    余     |   yú   | I; me           | 6.0e0 |
|    甚     |  shén  | very; extremely | 3.0e0 |
|    予     |   yǔ   | beforehand      | 1.0e0 |

## Organization Name

|    Character     |           Pinyin           | Translation                                              | Count |
| :--------------: | :------------------------: | -------------------------------------------------------- | :---: |
|      联合国      |        lián hé guó         | United Nations                                           | 2.8e2 |
|      安全部      |         ānquán bù          | Ministry of Security                                     | 1.7e2 |
|      安全局      |         ānquán jú          | Security Bureau                                          | 1.5e2 |
|      国防部      |         guófáng bù         | Ministry of Defense                                      | 1.5e2 |
|      国务院      |         guówùyuàn          | State Department                                         | 1.0e2 |
|      内务部      |          nèiwù bù          | Ministry of the Interior                                 | 1.0e2 |
|      司法部      |          sīfǎ bù           | Ministry of Justice                                      | 1.0e2 |
|      美国队      |         měiguó duì         | Team USA                                                 | 9.2e1 |
|       北约       |           běiyuē           | NATO (North Atlantic Treaty Organization)                | 6.5e1 |
|      财政部      |        cáizhèng bù         | Ministry of Finance                                      | 6.2e1 |
|      卫生部      |        wèishēng bù         | Ministry of Health                                       | 5.0e1 |
|      人事部      |         rénshì bù          | Personnel Department                                     | 3.3e1 |
|      外交部      |         wàijiāo bù         | Ministry of Foreign Affairs                              | 3.2e1 |
|        陶        |            táo             |                                                          | 3.1e1 |
|     中国政府     |      zhōngguó zhèngfǔ      | Government of China                                      | 2.6e1 |
|      农业部      |         nóngyè bù          | Ministry of Agriculture                                  | 2.3e1 |
|      摩萨德      |          mó sà dé          | Mossad                                                   | 2.3e1 |
|      教育部      |         jiào yù bù         | Ministry of Education                                    | 2.0e1 |
|      交通部      |        jiāotōng bù         | Ministry of Communications                               | 1.9e1 |
|    国家安全部    |      guójiā ānquán bù      | Ministry of National Security                            | 1.4e1 |
|      气象局      |         qìxiàng jú         | Bureau of Meteorology                                    | 1.4e1 |
|      美联储      |         měiliánchǔ         | Fed                                                      | 1.3e1 |
|      德国队      |         déguó duì          | Team Germany                                             | 1.2e1 |
|       强生       |         qiángshēng         | Johnson & Johnson                                        | 1.1e1 |
|      能源部      |        néngyuán bù         | Department of Energy                                     | 1.1e1 |
|      美联社      |        měi lián shè        | Associated Press                                         | 1.0e1 |
|      非国大      |         fēi guó dà         | ANC (African National Congress)                          | 1.0e1 |
|     世界银行     |       shìjiè yínháng       | World Bank                                               | 9.0e0 |
|       工大       |           gōngdà           | University of Technology                                 | 8.0e0 |
|      瑞典队      |        ruìdiǎn duì         | Team Sweden                                              | 8.0e0 |
|    环境保护局    |     huánjìng bǎohù jú      | Environmental Protection Agency                          | 6.0e0 |
|       科大       |            kēdà            | (HKUST) Hong Kong University of Science and Technology   | 6.0e0 |
|    全国委员会    |     quánguó wěiyuánhuì     | National Committee                                       | 5.0e0 |
|      公安部      |         gōng'ān bù         | Ministry of Public Security                              | 5.0e0 |
| 国际货币基金组织 |  guójì huòbì jījīn zǔzhī   | International Monetary Fund                              | 5.0e0 |
|  城市规划委员会  | chéngshì guīhuà wěiyuánhuì | Town Planning Commission                                 | 5.0e0 |
|     巴解组织     |        bā jiě zǔzhī        | PLO (Palestine Liberation Organization)                  | 5.0e0 |
|      文学院      |        wén xuéyuàn         | art college                                              | 5.0e0 |
|     那不勒斯     |          nàbùlèsī          | Naples                                                   | 5.0e0 |
|      中国队      |        zhōngguó duì        | Team China                                               | 4.0e0 |
|      审计局      |         shěnjì jú          | Audit Bureau                                             | 4.0e0 |
|      富士通      |         fùshìtōng          | Fujitsu                                                  | 4.0e0 |
|     最高法院     |       zuìgāo fǎyuàn        | Supreme Court                                            | 4.0e0 |
|      法国队      |         fàguó duì          | Team France                                              | 4.0e0 |
|      路透社      |         lùtòu shè          | Reuters                                                  | 4.0e0 |
|     东方航空     |     dōngfāng hángkōng      | Eastern Airlines                                         | 3.0e0 |
|    商业委员会    |     shāngyè wěiyuánhuì     | business council                                         | 3.0e0 |
|     国家电网     |      guójiā diànwǎng       | State Grid                                               | 3.0e0 |
|      档案局      |         dǎng'àn jú         | Archives Bureau                                          | 3.0e0 |
|       非行       |          fēixíng           | non-line                                                 | 3.0e0 |
|      韩国队      |         hánguó duì         | Team South Korea                                         | 3.0e0 |
|     世贸组织     |        shìmào zǔzhī        | WTO (World Trade Organization)                           | 2.0e0 |
|      同盟会      |        tóngménghuì         | Alliance                                                 | 2.0e0 |
|        唐        |            táng            | Tang Dynasty                                             | 2.0e0 |
|      文化部      |         wénhuà bù          | Ministry of Culture                                      | 2.0e0 |
|      新华社      |         xīnhuá shè         | Xinhua                                                   | 2.0e0 |
|      欧佩克      |          ōupèikè           | OPEC (Organization of the Petroleum Exporting Countries) | 2.0e0 |
|      监察部      |         jiānchá bù         | Supervision Department                                   | 2.0e0 |
|        邹        |            zōu             | Zou                                                      | 2.0e0 |
|   世界贸易组织   |     shìjiè màoyì zǔzhī     | WTO (World Trade Organization)                           | 1.0e0 |
|     东方集团     |      dōngfāng jítuán       | Oriental Group                                           | 1.0e0 |
|  中国人民解放军  | zhōngguó rénmín jiěfàngjūn | Chinese People's Liberation Army                         | 1.0e0 |
|    中央委员会    |    zhōngyāng wěiyuánhuì    | Central Committee                                        | 1.0e0 |
|      党中央      |       dǎng zhōngyāng       | Party Central Committee                                  | 1.0e0 |
|      商业部      |         shāngyè bù         | Ministry of Commerce                                     | 1.0e0 |
|      啤酒花      |          píjiǔhuā          | hops                                                     | 1.0e0 |
|      园林局      |         yuánlín jú         | Bureau of Landscape Architecture                         | 1.0e0 |
|    教育委员会    |     jiàoyù wěiyuánhuì      | Board of Education                                       | 1.0e0 |
|      旅游局      |          lǚyóu jú          | Tourism                                                  | 1.0e0 |
|      林业部      |          línyè bù          | Ministry of Forestry                                     | 1.0e0 |
|      水利部      |         shuǐlì bù          | Ministry of Water Resources                              | 1.0e0 |
|     海关总署     |      hǎiguān zǒng shǔ      | General Administration of Customs                        | 1.0e0 |
|   联合国安理会   |     liánhéguó ānlǐhuì      | United Nations Security Council                          | 1.0e0 |
|    计划委员会    |      jìhuà wěiyuánhuì      | planning committee                                       | 1.0e0 |
|  计划生育委员会  |  jìhuà shēngyù wěiyuánhuì  | Family Planning Commission                               | 1.0e0 |

## Prefix

| Character | Pinyin | Translation    | Count |
| :-------: | :----: | -------------- | :---: |
|    超     |  chāo  | super-         | 1.3e3 |
|    准     |  zhǔn  | quasi-; para-; | 9.1e1 |
|    泛     |  fàn   | pan-           | 2.4e1 |

## [Numeric Morpheme](https://www.hko.gov.hk/en/gts/time/stemsandbranches.htm)

| Character | Pinyin | Translation                  | Count |
| :-------: | :----: | ---------------------------- | :---: |
|    甲     |  jiǎ   | first; first heavenly stem   | 1.1e2 |
|    丙     |  bǐng  | third; third heavenly stem   | 8.9e1 |
|    乙     |   yǐ   | second; second heavenly stem | 4.1e1 |
|    丁     |  dīng  | fourth; fourth heavenly stem | 2.6e1 |
|    戊     |   wù   | fifth; fifth heavenly stem   | 2.2e1 |
|    巳     |   sì   | sixth; sixth earthly branch  | 1.3e1 |
|    寅     |  yín   | third; third earthly branch  | 2.0e0 |
|    癸     |  guǐ   | tenth; tenth heavenly stem   | 1.0e0 |
|    辰     |  chén  | fifth; fifth earthly branch  | 1.0e0 |

## Radicals

| Character   | Pinyin | Translation           |
| ----------- | ------ | --------------------- |
| 一          | yī     | one                   |
| 丨          | gǔn    | line                  |
| 丶          | zhǔ    | stroke                |
| 丿 乀 乁    | fú     | oblique               |
| 乙 乚 乛    | yǐ     | sickle                |
| 亅          | jué    | hook                  |
| 二          | èr     | two                   |
| 亠          | tóu    | shelter; head         |
| 人 亻       | rén    | man                   |
| 儿          | er     | child                 |
| 入          | rù     | to enter              |
| 八 丷       | bā     | eight; separate       |
| 冂          | jiōng  | scope                 |
| 冖          | mì     | to cover              |
| 冫          | bīng   | ice                   |
| 几          | jǐ     | table                 |
| 凵          | qiǎn   | container             |
| 刂 刁 刀 ク | dāo    | knife                 |
| 力          | lì     | force                 |
| 勹          | bāo    | to wrap               |
| 匕          | bǐ     | spoon; man overthrown |
| 匚          | fāng   | open box              |
| 匸          | xì     | to hide               |
| 十          | shí    | ten                   |
| 卜          | bo     | divination            |
| 卩          | jié    | seal                  |
| 厂          | chǎng  | production facility   |
| 厶          | sī     | secret                |
| 又 ヌ       | yòu    | still; hand           |
| 口          | kǒu    | mouth                 |
| 囗          | wéi    | enclosure             |
| 土          | tǔ     | earth                 |
| 士          | shì    | scholar               |
| 夂          | zhǐ    | to go                 |
| 夊          | suī    | go slowly             |
| 夕          | xī     | evening               |
| 大          | dà     | big                   |
| 女          | nǚ     | woman                 |
| 子          | zi     | child                 |
| 宀          | mián   | roof                  |
| 寸          | cùn    | thumb                 |
| 小 ⺌ ⺍    | xiǎo   | small                 |
| 尢          | yóu    | weak                  |
| 尸          | shī    | dead body             |
| 屮          | chè    | germ                  |
| 山          | shān   | mountain              |
| 川 巛       | chuān  | river                 |
| 工          | gōng   | work                  |
| 己          | jǐ     | personal              |
| 巾          | jīn    | turban                |
| 干          | gàn    | dry                   |
| 幺          | yāo    | tiny                  |
| 广          | guǎng  | shelter               |
| 廴          | yǐn    | great; stride         |
| 廾          | gǒng   | two, hands            |
| 弋          | yì     | arrow-grapin          |
| 弓          | gōng   | bow                   |
| 彐 彑       | jì     | snout                 |
| 彡          | shān   | beard; brush          |
| 彳          | chì    | walk around           |
| 心 忄       | xīn    | heart                 |
| 戈          | gē     | halberd               |
| 戶 户       | hù     | gate                  |
| 手 扌 才    | shǒu   | hand                  |
| 支          | zhī    | branch                |
| 攴 攵       | pū     | to bump; hand         |
| 文          | wén    | writing               |
| 斗          | dòu    | measurer              |
| 斤          | jīn    | ax; 500 grams         |
| 方          | fāng   | square; direction     |
| 无          | wú     | without               |
| 日          | rì     | sun                   |
| 曰          | yuē    | to say                |
| 月          | yuè    | moon                  |
| 木 朩       | mù     | tree                  |
| 欠          | qiàn   | tired                 |
| 止          | zhǐ    | to stop               |
| 歹          | dǎi    | death                 |
| 殳          | shū    | weapon                |
| 母 毋 毌    | mǔ     | mother                |
| 比          | bǐ     | to confront           |
| 毛          | máo    | fur                   |
| 氏          | shì    | clan                  |
| 气          | qì     | air                   |
| 水 氵 氺    | shuǐ   | water                 |
| 火 灬       | huǒ    | fire                  |
| 爪 爫       | zhǎo   | claw                  |
| 父          | fù     | father                |
| 爻          | yáo    | double                |
| 爿          | pán    | splitted; wood        |
| 片          | piàn   | slice                 |
| 牙          | yá     | tooth; ivory          |
| 牛 牜 ⺧    | niú    | beef                  |
| 犬 犭       | quǎn   | dog                   |
| 玄          | xuán   | deep                  |
| 王 玉       | yù     | jade                  |
| 瓜          | guā    | melon                 |
| 瓦          | wǎ     | tile                  |
| 甘          | gān    | sweet                 |
| 生          | shēng  | be born               |
| 用          | yòng   | to use                |
| 田          | tián   | field                 |
| 疋 ⺪       | pǐ     | roll; piece of cloth  |
| 疒          | nè     | disease               |
| 癶          | bō     | to go up              |
| 白          | bái    | white                 |
| 皮          | pí     | skin                  |
| 皿          | mǐn    | container             |
| 目          | mù     | eye                   |
| 矛          | máo    | spear                 |
| 矢          | shǐ    | arrow                 |
| 石          | shí    | stone                 |
| 示 礻       | shì    | to venerate; to show  |
| 禸          | róu    | get away              |
| 禾          | hé     | grain                 |
| 穴          | xué    | cave; swing door      |
| 立          | lì     | standing up           |
| 竹 ⺮ ケ    | shì    | bamboo                |
| 米          | mǐ     | rice                  |
| 糸 纟       | mì     | silk                  |
| 缶          | fǒu    | jar                   |
| 网 罒 罓 罓 | wǎng   | net                   |
| 羊 ⺶ ⺷    | yáng   | sheep                 |
| 羽          | yǔ     | feather               |
| 老 耂       | lǎo    | old                   |
| 而          | ér     | and                   |
| 耒          | lěi    | plow                  |
| 耳          | ěr     | ear                   |
| 聿          | yù     | brush                 |
| 肉 月       | ròu    | meat                  |
| 臣          | chén   | minister              |
| 自          | zì     | personal              |
| 至          | zhì    | to reach              |
| 臼          | jiù    | mortar                |
| 舌          | shé    | tongue                |
| 舛          | chuǎn  | to oppose             |
| 舟          | zhōu   | boat                  |
| 艮          | gěn    | decided               |
| 色          | sè     | color                 |
| 艹          | cao    | vegetable             |
| 虍          | hū     | tiger                 |
| 虫          | chóng  | insect                |
| 血          | xuè    | blood                 |
| 行          | xíng   | circulate             |
| 衣 衤       | yī     | cloth                 |
| 西 覀       | xi     | lid                   |
| 见          | jiàn   | to see                |
| 角          | jiǎo   | horn                  |
| 言 讠       | yán    | speech (trad)         |
| 谷          | gǔ     | valley                |
| 豆          | dòu    | pea                   |
| 豕          | chù    | pig                   |
| 豸          | zhì    | feline; cat family    |
| 贝          | bèi    | shell; money          |
| 赤          | chì    | red                   |
| 走          | zǒu    | to walk               |
| 足          | zú     | foot                  |
| 身          | shēn   | body                  |
| 车          | chē    | car                   |
| 辛          | xīn    | bitter                |
| 辰          | chén   | morning               |
| 辶          | chuò   | brisk walking         |
| 阝 (邑)     | fù     | city                  |
| 酉          | yǒu    | alcohol               |
| 釆          | biàn   | to distinguish        |
| 里          | lǐ     | neighborhood          |
| 金 钅       | jīn    | gold; metal           |
| 长          | zhǎng  | long                  |
| 门          | mén    | gate                  |
| 阝(阜)      | fù     | mound                 |
| 隶          | lì     | servant               |
| 隹          | zhuī   | short-tailed bird     |
| 雨          | yǔ     | rain                  |
| 青          | qīng   | blue/green            |
| 非          | fēi    | false                 |
| 面          | miàn   | face                  |
| 革          | gé     | leather               |
| 韦          | wéi    | tanned leather        |
| 韭          | jiǔ    | leek                  |
| 音          | yīn    | sound                 |
| 页 頁       | yè     | head; leaf            |
| 风          | fēng   | wind                  |
| 飞          | fēi    | to fly                |
| 食 饣       | shí    | to eat                |
| 首          | shǒu   | head                  |
| 香          | xiāng  | perfume               |
| 马          | mǎ     | horse                 |
| 骨          | gǔ     | bone                  |
| 高          | gāo    | high                  |
| 髟          | biāo   | hair                  |
| 鬥          | dòu    | fight                 |
| 鬯          | chàng  | sacrificial wine      |
| 鬲          | gé     | cauldron              |
| 鬼          | guǐ    | ghost                 |
| 鱼          | yú     | fish                  |
| 鸟          | niǎo   | bird                  |
| 鹵          | lǔ     | salt                  |
| 鹿          | lù     | deer                  |
| 麦          | mài    | corn                  |
| 麻          | má     | hemp                  |
| 黃          | huáng  | yellow                |
| 黍          | shǔ    | millet                |
| 黑          | hēi    | black                 |
| 黹          | zhǐ    | embroidery            |
| 黾          | miǎn   | frog                  |
| 鼎          | dǐng   | tripod                |
| 鼓          | gǔ     | drum                  |
| 鼠          | shǔ    | rat                   |
| 鼻          | bí     | nose                  |
| 齐          | qí     | regular               |
| 齿          | chǐ    | tooth                 |
| 龙          | lóng   | dragon                |
| 龟          | guī    | tortoise              |
| 龠          | yuè    | flute                 |
