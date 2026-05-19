<div align="center">

<br/>

```
  ██████╗ ██╗   ██╗████████╗██╗   ██╗██████╗  ██████╗ ██╗   ██╗
 ██╔════╝ ██║   ██║╚══██╔══╝██║   ██║██╔══██╗██╔════╝ ██║   ██║
 ██║  ███╗██║   ██║   ██║   ██║   ██║██████╔╝██║  ███╗██║   ██║
 ██║   ██║██║   ██║   ██║   ██║   ██║██╔══██╗██║   ██║██║   ██║
 ╚██████╔╝╚██████╔╝   ██║   ╚██████╔╝██║  ██║╚██████╔╝╚██████╔╝
  ╚═════╝  ╚═════╝    ╚═╝    ╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚═════╝
```

### **गुटरगू** — *Privacy-first. Built for Bharat.*

<br/>

[![Flutter](https://img.shields.io/badge/Flutter-3.x-02569B?style=flat-square&logo=flutter&logoColor=white)](https://flutter.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Sequelize-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://postgresql.org)
[![Redis](https://img.shields.io/badge/Redis-Cache-DC382D?style=flat-square&logo=redis&logoColor=white)](https://redis.io)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-CDN-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://cloudflare.com)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=flat-square)](LICENSE)

<br/>

> *"Your conversations belong solely to you — not us, not advertisers, not anyone else."*

<br/>

</div>

---

<br/>

## ✦ What is Guturgu?

**Guturgu** (गुटरगू) — the soft cooing of two pigeons talking, a whisper only they can hear.

It's a modern messaging app engineered from the ground up for **privacy, speed, and beautiful experience** — built specifically for India. No surveillance capitalism. No data harvesting. No compromises. Just pure, private communication the way it was meant to be.

Lightning-fast messaging. Stunning UI. Zero data collection. This is texting, reimagined.

<br/>

---

<br/>

## ✦ Core Promises

<br/>

<table>
<tr>
<td width="33%" align="center">

### 🔒
**Zero Data Collection**

We collect no personal data. No contacts harvested, no location tracked, no metadata stored. What stays on your device, stays on your device.

</td>
<td width="33%" align="center">

### 🚫
**No Ads. Ever.**

Because we collect nothing, we have nothing to sell. You will never be profiled, targeted, or interrupted by advertisements on Guturgu.

</td>
<td width="33%" align="center">

### ⚡
**End-to-End Encrypted**

Every message, call, and media file is E2E encrypted by default — all the time. Not even Guturgu can read your conversations.

</td>
</tr>
</table>

<br/>

---

<br/>

## ✦ Features

<br/>

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   💬  Instant Messaging        →  Real-time P2P encrypted chat          │
│   📞  Voice Calls              →  DTLS-SRTP secured audio calls         │
│   📹  Video Calls              →  Encrypted HD video, no middleman      │
│   🖼️  Media Sharing            →  E2E encrypted full-resolution files   │
│   🎨  Modern UI/UX             →  Fresh, fluid, India-first design      │
│   🌐  Blazing Fast CDN         →  Cloudflare-powered global delivery    │
│   🔔  Smart Notifications      →  No content leaked to push servers     │
│   👥  Group Messaging          →  Sender Key protocol for efficiency    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

<br/>

---

<br/>

## ✦ Architecture

<br/>

```
                         ╔══════════════════════════════╗
                         ║        GUTURGU CLIENT        ║
                         ║        (Flutter App)         ║
                         ╚══════════╤═══════════════════╝
                                    │  TLS 1.3 + E2E Encryption
                    ┌───────────────┴───────────────┐
                    │                               │
           ╔════════▼════════╗             ╔════════▼════════╗
           ║  Cloudflare CDN ║             ║  Media Gateway  ║
           ║  (Edge Layer)   ║             ║  (Encrypted CDN)║
           ╚════════╤════════╝             ╚════════╤════════╝
                    │                               │
           ╔════════▼═══════════════════════════════▼════════╗
           ║               Node.js + Express                 ║
           ║              (API Gateway Layer)                ║
           ╚══════╤══════════════════════════╤══════════════╝
                  │                          │
       ╔══════════▼═══════╗       ╔══════════▼═══════════╗
       ║   PostgreSQL DB   ║       ║    Redis Cache        ║
       ║  (Sequelize ORM)  ║       ║  (Sessions / Queues)  ║
       ╚═══════════════════╝       ╚══════════════════════╝
```

<br/>

---

<br/>

## ✦ Security Architecture

> Guturgu implements a **multi-layered cryptographic security model**. Every piece of data is treated as sensitive — because to us, it is.

<br/>

### 🔑 Message Encryption

| Layer | Protocol | Purpose |
|-------|----------|---------|
| **Message Key** | `AES-256-GCM` | Ephemeral symmetric encryption per message |
| **Key Exchange** | `Signal X3DH + Double Ratchet` | Forward secrecy — each message uses a fresh key |
| **Key Transport** | `Recipient's Public Key` | Message key encrypted before transmission |
| **Symmetric Auth** | `libsodium` (NaCl bindings) | Authenticated encryption primitives |

<br/>

### 📞 Call Encryption

| Layer | Protocol | Purpose |
|-------|----------|---------|
| **P2P Calls** | `DTLS-SRTP` | Military-grade encrypted audio/video channels |
| **Signaling** | `E2E Encrypted Signaling` | Call metadata never exposed |

<br/>

### 📁 Media Encryption

| Layer | Protocol | Purpose |
|-------|----------|---------|
| **Upload** | `Client-side encryption` | Media encrypted on device before upload |
| **Per-recipient** | `Naïve Per-Recipient Encryption` | Each recipient gets their own encrypted copy |
| **Group Media** | `Sender Key Protocol` | Efficient multi-recipient group media delivery |
| **Resolution** | `Full-resolution` | No compression or quality loss — ever |

<br/>

```
  Your Device                                     Recipient's Device
  ──────────                                     ──────────────────
  [Message]  →  [AES-GCM Encrypt]  →  [Transit]  →  [AES-GCM Decrypt]  →  [Message]
                      ↑                                      ↑
              Ephemeral Message Key                  Ephemeral Message Key
             (X3DH Double Ratchet)                  (X3DH Double Ratchet)

          Neither Guturgu nor any server ever sees the plaintext.
```

<br/>

---

<br/>

## ✦ Tech Stack

<br/>

### 📱 Client
```
Flutter (Dart)
├── Material 3 + Custom Design System
├── libsodium bindings (flutter_sodium)
├── Signal Protocol implementation
└── Local-only data persistence
```

### ⚙️ Backend
```
Node.js + Express
├── PostgreSQL  (primary database)
│   └── Sequelize ORM  (migrations, models, associations)
├── Redis       (real-time queues, session management, pub/sub)
└── Cloudflare  (CDN, DDoS protection, edge caching)
```

### 🔐 Cryptography
```
Security Stack
├── AES-256-GCM          (message encryption)
├── X3DH + Double Ratchet (Signal Protocol)
├── DTLS-SRTP            (real-time calls)
├── libsodium / NaCl     (authenticated symmetric crypto)
├── Sender Key Protocol  (group messaging efficiency)
└── Client-side media encryption (pre-upload)
```

<br/>
<br/>

## ✦ Privacy, By Design

<br/>

| What most apps collect | What Guturgu collects |
|------------------------|----------------------|
| 📍 Your location | ✗ Nothing |
| 👥 Your contacts | ✗ Nothing |
| 📊 Usage metadata | ✗ Nothing |
| 🎯 Behavioural profile | ✗ Nothing |
| 📨 Message content | ✗ Nothing |
| 🔗 Social graph | ✗ Nothing |

> **The minimal information required to operate Guturgu remains strictly local to your device.**
> We have no server-side user profiles. We have no analytics dashboards showing your behaviour. We are blind to you — by design.

<br/>

---

<br/>

## ✦ Roadmap

<br/>

```
  2026 Q1   ──►  Testing
  2026 Q2   ──►  Alpha Release (Private Beta)
  2026 Q3   ──►  Public Beta — Android 
  2026 Q4   ──►  iOS Launch 
  Beyond    ──►  Disappearing messages
```

<br/>

---

<br/>

## ✦ Contributing

We welcome contributions that align with our core values of **privacy, security, and craftsmanship**.

---

<br/>

## ✦ Security Disclosure

Found a vulnerability? **Please do not open a public issue.**

📧 Report privately to: `security@guturgu.in`

We take all security reports seriously and will respond within **48 hours**. Responsible disclosures are credited in our Hall of Fame.

<br/>

---

<br/>

## ✦ License

```
MIT License — Copyright © 2025 Guturgu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software, to deal in the Software without restriction.
```

See [`LICENSE`](LICENSE) for the full text.

<br/>

---

<br/>

<div align="center">

**Made with ❤️ for India**

*"गुटरगू — because some conversations are just between you two."*

<br/>

[![Instagram](https://img.shields.io/badge/Instagram-@guturgu-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://instagram.com/guturguapp)
[![Website](https://img.shields.io/badge/Website-guturgu.in-000000?style=flat-square&logo=safari&logoColor=white)](https://guturgu.com)

<br/>

*If Guturgu resonates with you, leave a ⭐ — it helps more people find us.*

</div>
